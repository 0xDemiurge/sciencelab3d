/**
 * Global font configuration for WebGL text (troika-three-text `<Text>` labels).
 *
 * Troika's default font (Roboto from Google Fonts) is a Latin-only subset and
 * renders boxes for the subscripts, Greek letters, and math symbols used in
 * experiment labels (n₁, θᵢ, √, ∞, …). Bundled DejaVu Sans covers all of them,
 * works offline, and must be registered before the first font request.
 */
import { configureTextBuilder } from "troika-three-text";

configureTextBuilder({ defaultFontURL: "/fonts/DejaVuSans.ttf" });
