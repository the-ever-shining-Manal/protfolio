// Procedural Web Audio API sound generator for subtle sci-fi ambient & telemetry UI sounds
// No external assets required, fully silent until explicitly enabled by the user.

class CosmicAudioEngine {
  private ctx: AudioContext | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private isEnabled: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleAmbient(): boolean {
    this.initContext();
    if (!this.ctx) return false;

    if (this.isEnabled) {
      this.stopAmbient();
      this.isEnabled = false;
    } else {
      this.startAmbient();
      this.isEnabled = true;
      this.playChirp(880, 0.08);
    }
    return this.isEnabled;
  }

  public getIsPlaying(): boolean {
    return this.isEnabled;
  }

  private startAmbient() {
    if (!this.ctx) return;
    try {
      // Low harmonic hum (deep space resonance)
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();
      this.filter = this.ctx.createBiquadFilter();

      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(110.5, this.ctx.currentTime); // Slight detune for celestial shimmer

      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(180, this.ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 3); // Very quiet, non-intrusive

      this.ambientOsc1.connect(this.filter);
      this.ambientOsc2.connect(this.filter);
      this.filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch {
      // Silent catch if audio not supported
    }
  }

  private stopAmbient() {
    if (!this.ctx || !this.ambientGain) return;
    try {
      this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          this.ambientOsc1?.stop();
          this.ambientOsc2?.stop();
          this.ambientOsc1?.disconnect();
          this.ambientOsc2?.disconnect();
          this.ambientGain?.disconnect();
          this.ambientOsc1 = null;
          this.ambientOsc2 = null;
          this.ambientGain = null;
        } catch {
          // ignore
        }
      }, 900);
    } catch {
      // ignore
    }
  }

  public playChirp(freq = 600, duration = 0.05) {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // ignore
    }
  }
}

export const cosmicAudio = new CosmicAudioEngine();
