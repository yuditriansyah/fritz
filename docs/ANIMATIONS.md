# Page Transitions & Animations Documentation

## Overview
Website ini menggunakan **Framer Motion** untuk memberikan animasi yang smooth dan menarik pada transisi halaman, navigasi, dan komponen-komponen lainnya.

## Page Transitions

### Lokasi Konfigurasi
File utama untuk page transitions: `/src/AnimatedRoutes.tsx`

### Cara Mengubah Efek Transisi

#### 1. Mengubah Jenis Animasi
Di `AnimatedRoutes.tsx`, ubah variabel `currentVariants`:

```typescript
// Pilihan yang tersedia:
const currentVariants = fadeVariants;    // Fade in/out (default)
const currentVariants = slideVariants;   // Slide horizontal
const currentVariants = scaleVariants;   // Scale + rotate
const currentVariants = flipVariants;    // 3D flip (advanced)
```

#### 2. Mengubah Timing & Easing
Ubah variabel `currentTransition`:

```typescript
// Pilihan yang tersedia:
const currentTransition = transitionConfigs.smooth;  // Smooth (default)
const currentTransition = transitionConfigs.spring;  // Spring bounce
const currentTransition = transitionConfigs.bouncy;  // More bouncy
const currentTransition = transitionConfigs.fast;    // Quick transition
```

### Custom Transitions
Untuk membuat animasi custom, edit `/src/lib/animations.ts`:

```typescript
export const customVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    // Properti animasi lainnya
  },
  in: { 
    opacity: 1, 
    scale: 1 
  },
  out: { 
    opacity: 0, 
    scale: 1.2 
  },
};
```

## Component Animations

### Navigation Bar
- **Logo**: Heartbeat animation dengan hover effect
- **Menu Items**: Staggered entrance dengan animated underline
- **Mobile Menu**: Slide down dengan stagger children
- **Menu Button**: Rotate animation saat toggle

### Schedule Page
- **Header**: Gradient text animation
- **Filter Buttons**: Staggered entrance
- **Event Cards**: Individual slide-up dengan delay
- **"Never Miss Event" Card**: Fade in dengan staggered content

### Cards & Components
- **Hover Effects**: Scale + shadow enhancement
- **Loading States**: Fade in animations
- **Interactive Elements**: Tap/click feedback

## Animation Variants Library

### Available Variants (`/src/lib/animations.ts`)

1. **fadeVariants**: Simple fade dengan blur effect
2. **slideVariants**: Horizontal slide transition
3. **scaleVariants**: Scale dengan rotation
4. **flipVariants**: 3D flip animation
5. **containerVariants**: Untuk parent containers
6. **childVariants**: Untuk child elements

### Transition Configs

1. **smooth**: 0.8s dengan cubic bezier easing
2. **spring**: Spring physics dengan damping
3. **bouncy**: High energy spring
4. **fast**: Quick 0.4s transition

## CSS Animations

### Custom CSS di `/src/index.css`

- **gradient-animation**: Gradient text yang bergerak
- **fadeIn**: Basic fade in animation
- **card-float**: Card hover effects
- **nav-item-hover**: Navigation hover effects

### Accessibility
Website mendukung `prefers-reduced-motion` untuk users yang lebih suka animasi minimal.

## Performance Tips

1. **Mobile**: Beberapa hover effects dinonaktifkan di mobile
2. **Reduced Motion**: Otomatis nonaktif untuk users dengan preference
3. **Stagger Timing**: Optimized untuk tidak overwhelm user

## Quick Examples

### Mengubah ke Slide Transition
```typescript
// Di AnimatedRoutes.tsx
const currentVariants = slideVariants;
const currentTransition = transitionConfigs.fast;
```

### Mengubah ke Spring Bouncy
```typescript
// Di AnimatedRoutes.tsx  
const currentVariants = scaleVariants;
const currentTransition = transitionConfigs.bouncy;
```

### Mengubah ke Minimal Animations
```typescript
// Di AnimatedRoutes.tsx
const currentVariants = fadeVariants;
const currentTransition = transitionConfigs.fast;
```

## Troubleshooting

### Animasi Tidak Muncul
1. Pastikan Framer Motion terinstall: `npm install framer-motion`
2. Check console untuk errors
3. Pastikan AnimatePresence memiliki `key` yang unique

### Performance Issues
1. Reduce stagger delays
2. Use `fast` transition config
3. Disable animations untuk mobile jika perlu

### Layout Shifts
1. Pastikan containers memiliki fixed dimensions
2. Use `layout` prop di motion components jika perlu
3. Set `position: relative` pada parent containers

---

**Dibuat dengan ❤️ untuk Fritzy Rosmerian Website**
