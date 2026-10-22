# Gait Analysis in TrainingTree Pro: Video, Sensors and Symmetry

How a horse moves is one of the most useful things a trainer, rider or vet can track. Small changes in rhythm, stride or symmetry are worth noticing, and they're easier to notice when you can compare one week with another side by side.

TrainingTree Pro gives you two ways to record movement, a phone video and phone sensors, and keeps every result on the horse's record. This article explains what each one measures and how to use it.

## Video gait analysis

### How it works
Film the horse on a phone as it trots past, moving across the frame from side to side, and upload the clip to the horse's record (MP4, MOV or AVI, up to 500 MB). TrainingTree Pro analyses the movement using **optical flow**, a well-established computer-vision technique that tracks how the image moves from one frame to the next.

### What it reports
- **Stride frequency:** strides per second.
- **Stride count** over the clip.
- **Left-right symmetry,** on a scale where 1.0 is perfectly even.
- **Stride consistency:** how much stride amplitude varies from one stride to the next.

Each result states the method used to produce it.

### Footage quality is checked
Every clip is checked before its numbers are shown. Footage below 30 frames per second, too dark or too bright, or too short to hold several strides is marked as not adequate, with the reason. If the frame rate can't be read from the file, stride frequency is withheld rather than estimated.

### Comparing two dates
The **gait compare** view plays two videos side by side and lists the differences between the two analyses. It's useful for:

- tracking a horse through a rehab plan,
- checking the effect of a shoeing or saddle change,
- giving the vet a clear before-and-after.

## Sensor gait analysis

### Calibrated to each horse
Phones and sensors sit differently on every horse and every saddle. Before sensor data is analysed, TrainingTree Pro runs a short **calibration** that aligns the sensor's axes to the horse and normalises for its stride amplitude. Readings from different rides can then be compared fairly.

This calibration method is the subject of a US provisional patent application filed in November 2025.

### Gait from stride frequency
Walk, trot, canter and gallop are identified from stride frequency, using these default bands:

| Gait | Stride frequency |
|---|---|
| Walk | 0.8 – 1.2 Hz |
| Trot | 1.3 – 1.9 Hz |
| Canter | 1.9 – 2.4 Hz |
| Gallop | 2.3 – 2.8 Hz |

A small buffer at each boundary stops a horse flickering between two gaits, and every band can be adjusted for an individual horse.

Sensor analysis is live on the server. Capture from the phone app is currently in device testing.

## Symmetry over time

The **symmetry analyzer** grades asymmetry as minimal, mild, moderate or severe. Every analysis is stored on the horse's record, so you can look back across dates rather than relying on memory. Asymmetry is also one of the inputs to the horse's injury-risk assessment and daily readiness.

## How to get consistent results

1. **Film the same way each time:** side-on, same surface, same distance, and the camera mounted or held still. Camera shake adds noise.
2. **Use good light, film at 30 frames per second or more,** and keep the whole horse in frame.
3. **Record a baseline** when the horse is sound and in normal work, so later clips have something to compare against.
4. **Compare like with like:** the same gait, on the same surface, at a similar speed.
5. **Share results with your vet.** They're there to support a veterinary assessment, not to replace one.

## Where gait fits in

Gait results sit alongside the rest of the horse's record in TrainingTree Pro: training load, readiness, vet examinations and rehab plans. A change in movement can be read against what the horse has been doing, and while a rehab plan is active, training suggestions stay within its stage.

---

*Gait analysis in TrainingTree Pro is a record-keeping and comparison tool. It does not diagnose lameness and is not a substitute for examination by a veterinarian.*

*See gait analysis on your own horses. [Request a demo](/contact).*
