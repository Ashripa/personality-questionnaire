import { StaticRadialGradient } from '@paper-design/shaders-react';

/**
 * 主页 hero 视觉块 —— cult-ui `hero-static-radial-gradient` 所包装的真实着色器
 * （@paper-design/shaders-react 的 StaticRadialGradient，WebGL 渲染）。
 * 外层保留一层 CSS 渐变作为 WebGL 不可用时的降级底。
 */
export default function Hero() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        maxWidth: 440,
        aspectRatio: '1 / 1',
        borderRadius: 32,
        overflow: 'hidden',
        position: 'relative',
        background:
          'radial-gradient(circle at 30% 25%, #00d2ff 0%, transparent 45%),' +
          'radial-gradient(circle at 78% 22%, #006cff 0%, transparent 50%),' +
          'radial-gradient(circle at 78% 76%, #7c3aed 0%, transparent 52%),' +
          '#05070f',
        boxShadow:
          '0 40px 120px -20px rgba(79,70,229,.55),' +
          'inset 0 0 0 1px rgba(255,255,255,.08)',
      }}
    >
      <StaticRadialGradient
        colors={['#006CFF', '#00d2ff', '#7c3aed', '#4f46e5']}
        colorBack="#0b0f19ff"
        radius={0.98}
        focalDistance={0}
        focalAngle={0}
        falloff={0.9}
        mixing={0.7}
        distortion={0}
        distortionShift={0}
        distortionFreq={12}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}
