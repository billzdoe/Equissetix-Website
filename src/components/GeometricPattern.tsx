// GeometricPattern is retained as a thin alias so existing call sites keep
// working, but the decorative background is now horse & farm themed.
// The old abstract triangles/diamonds/lines have been replaced by
// FarmPattern (horse silhouettes, horseshoes, fence rails, pasture hills,
// grain). Legacy variant names are mapped inside FarmPattern.
//
// New code should import FarmPattern directly.
export { default } from './FarmPattern'
