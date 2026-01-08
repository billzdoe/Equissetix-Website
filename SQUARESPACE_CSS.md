# Squarespace Custom CSS for Equissetix

Copy and paste these CSS snippets into Squarespace: **Design > Custom CSS**

## Base Styles

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

/* Set base font */
body {
  font-family: 'Inter', sans-serif;
  background-color: #030712;
  color: #f3f4f6;
}

/* Headings use Poppins */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #38bdf8 0%, #e879f9 50%, #38bdf8 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Glassmorphism effect */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.glass-card-strong {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
}

/* Primary button gradient */
.btn-primary-gradient {
  background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
}

.btn-primary-gradient:hover {
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.5);
  transform: translateY(-2px);
}

/* Secondary button */
.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Section backgrounds */
.section-dark {
  background: linear-gradient(180deg, rgba(3, 7, 18, 0.95) 0%, #030712 100%);
}

.section-gradient {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%);
}
```

## Hero Section

```css
/* Hero section styling */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1), transparent 50%);
  pointer-events: none;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: #d1d5db;
  max-width: 800px;
  margin: 0 auto 2rem;
}
```

## Feature Cards

```css
/* Feature card grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
}

.feature-icon {
  color: #38bdf8;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: white;
}

.feature-description {
  color: #9ca3af;
  line-height: 1.6;
}
```

## Pricing Cards

```css
/* Pricing card styling */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
}

.pricing-card.popular {
  border: 2px solid #0ea5e9;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(14, 165, 233, 0.3);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.pricing-price {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 1rem 0;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.pricing-features li {
  padding: 0.75rem 0;
  color: #d1d5db;
  display: flex;
  align-items: start;
  gap: 0.75rem;
}

.pricing-features li::before {
  content: '✓';
  color: #38bdf8;
  font-weight: bold;
  flex-shrink: 0;
}
```

## Tab Navigation

```css
/* Breed tabs styling */
.breed-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.breed-tab {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  color: #d1d5db;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.breed-tab:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.breed-tab.active {
  background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
}
```

## Navigation

```css
/* Navigation styling */
.header-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link {
  color: #d1d5db;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #38bdf8;
}

.nav-link.active {
  color: #38bdf8;
  background: rgba(14, 165, 233, 0.2);
}
```

## Footer

```css
/* Footer styling */
.footer {
  background: rgba(17, 24, 39, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 0;
}

.footer-column h3 {
  color: white;
  margin-bottom: 1rem;
}

.footer-link {
  color: #9ca3af;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #38bdf8;
}
```

## Responsive Adjustments

```css
/* Mobile responsiveness */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .feature-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-card.popular {
    transform: scale(1);
  }
  
  .breed-tabs {
    flex-direction: column;
  }
}
```

## Animation Classes

```css
/* Fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease-out;
}

/* Float animation for decorative elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

## Usage Instructions

1. Go to **Design > Custom CSS** in Squarespace
2. Paste the relevant CSS sections above
3. Apply classes to your content blocks:
   - Add `gradient-text` class to text elements for gradient effect
   - Add `glass-card` or `glass-card-strong` to card blocks
   - Add `btn-primary-gradient` to buttons
   - Use `feature-grid` and `feature-card` classes for feature sections
   - Use `pricing-grid` and `pricing-card` for pricing sections

## Color Variables (for easy updates)

```css
:root {
  --primary: #0ea5e9;
  --primary-light: #38bdf8;
  --primary-dark: #0284c7;
  --accent: #d946ef;
  --accent-light: #e879f9;
  --accent-dark: #c026d3;
  --bg-dark: #030712;
  --bg-card: rgba(255, 255, 255, 0.05);
  --text-primary: #f3f4f6;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;
}
```

Then use these variables throughout:
```css
.example {
  color: var(--primary);
  background: var(--bg-card);
}
```
