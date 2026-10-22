# Understanding Training Load: How TrainingTree Pro Measures the Work Your Horse Does

Every trainer manages training load, whether or not they call it that. You know when a horse has had a big week, when it's had a few easy days, and when it's coming back from a break. Training-load monitoring puts numbers on that judgement so you can see the trend at a glance and share it with everyone involved in the horse's care.

This article explains how TrainingTree Pro measures load, which published methods it uses, and how the numbers appear in the app.

## Step one: the load of a single session

A session's load depends on how long the horse worked and how hard. TrainingTree Pro measures intensity from heart rate where it's available.

- **TRIMP (training impulse).** Based on Banister's 1991 model, TRIMP weights each session's duration by how high the heart rate ran relative to the horse's resting and maximum heart rates. Harder minutes count for more than easy ones. The app uses the sex-specific coefficients from that model.
- **Heart-rate zones.** Heart rate is placed in five zones using the heart-rate-reserve method (Karvonen, 1957), so "zone 3" means the same relative effort for every horse.
- **The horse's own resting heart rate** is used where it's recorded. Maximum heart rate uses a Thoroughbred-type value of about 230 bpm.

When a session has no heart-rate data, the app says the load is estimated rather than presenting it as measured.

## Step two: fatigue, fitness and the balance between them

A single session tells you little on its own. What matters is how sessions add up over time. TrainingTree Pro tracks three related figures, following the approach used widely in endurance sport:

- **Acute load (ATL):** a 7-day weighted average of recent work. Think of it as current fatigue.
- **Chronic load (CTL):** a 42-day weighted average. Think of it as the fitness the horse has built.
- **Training stress balance (TSB):** chronic minus acute. A positive balance suggests a fresher horse; a negative one suggests accumulated fatigue.

## Step three: the acute-to-chronic workload ratio

The **acute-to-chronic workload ratio (ACWR)** compares the last week's work with what the horse has been doing over the last month. Research in human athletes, including Hulin and colleagues (*British Journal of Sports Medicine*, 2016) and Gabbett (2016), associated sharp rises in this ratio with a higher rate of injury, and well-built chronic load with greater resilience.

TrainingTree Pro uses these reference bands:

| Ratio | What it suggests |
|---|---|
| Below 0.8 | Work is lighter than the horse is used to |
| 0.8 – 1.3 | Work is building at a steady pace |
| Above 1.3 | Work is rising quickly |
| Above 1.5 | Work is rising steeply |

These bands come from research in human sport. They're a guide for the trainer's judgement, not a diagnosis, and they're shown that way in the app.

### Two details that keep the ratio honest

**A fixed 28-day window, the same everywhere.** The ratio is always calculated over the 28 days ending today, with rest days counted as days of zero work. A horse that stopped working a week ago shows a falling ratio, as it should. Every chart, card and suggestion in the app uses the same calculation, so the numbers always agree.

**Enough data before a ratio is shown.** With only a handful of sessions in a month, the ratio reflects when the sessions happened to fall more than the training pattern. TrainingTree Pro waits until a horse has at least eight days with logged work in the window before it reports a ratio, and explains why when it doesn't.

## How the numbers are used in the app

### On the horse's page
Each horse shows its acute and chronic load, training stress balance, workload ratio and a trend label (decreasing, stable, increasing or rapidly increasing).

### In daily readiness
The **readiness score** (0–100) combines health, training load, recovery since the last hard session and injury risk, with green, yellow and red bands. It lists which inputs were measured and which were not.

### Before any workout suggestion
Every workout suggestion in TrainingTree Pro passes the same check first. If the workload ratio is above 1.3, readiness is red, or the horse has an active rehab plan, the suggestion is adjusted to lighter or rehab-appropriate work, and the reason is shown.

### In training plans
Generated plans keep week-over-week planned load within a 10% progressive-overload guideline and avoid scheduling a session within 48 hours of hard work.

## Getting started

Training-load monitoring works best with consistent records:

1. **Log every session,** including easy days and hacks. Rest days are counted automatically.
2. **Record heart rate where you can.** A heart-rate monitor gives the most accurate load; without one, the app estimates and labels it.
3. **Give it a few weeks.** Chronic load needs a month of history to mean much, and the ratio appears once there's enough data.
4. **Use the numbers alongside your eye.** Load figures are one input to your decisions, together with how the horse looks, moves and feels.

## Further reading

- Banister, E. W. (1991). Modeling elite athletic performance. In *Physiological Testing of Elite Athletes*. Human Kinetics.
- Gabbett, T. J. (2016). The training–injury prevention paradox. *British Journal of Sports Medicine*, 50, 273–280.
- Hulin, B. T., et al. (2016). The acute:chronic workload ratio predicts injury. *British Journal of Sports Medicine*, 50, 231–236.
- Karvonen, M. J., Kentala, E., & Mustala, O. (1957). The effects of training on heart rate. *Annales Medicinae Experimentalis et Biologiae Fenniae*, 35, 307–315.

---

*This article is for general information. Training decisions should take account of your veterinarian's advice and the individual horse.*

*See training load on your own horses. [Request a demo](/contact).*
