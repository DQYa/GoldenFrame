import { motion } from 'framer-motion';
import { Phone, MessageCircle, Camera, Sparkles, QrCode } from 'lucide-react';
import { studioInfo } from '../../data/graduationData';
import { easeOutExpo } from '../../data/animationConfig';

const iconMap: Record<string, React.ReactNode> = {
  portrait: <Camera className="w-4 h-4" />,
  digital: <Sparkles className="w-4 h-4" />,
};

export default function StudioSection() {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <h2 className="section-title">
            影像由 {studioInfo.name} 记录
          </h2>
          <p className="section-subtitle">{studioInfo.tagline}</p>
        </motion.div>

        {/* Studio card */}
        <motion.div
          className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed text-center mb-8">
            {studioInfo.description}
          </p>

          {/* Contact row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={`tel:${studioInfo.phone}`}
              className="w-full sm:w-auto glass-btn inline-flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>{studioInfo.phone}</span>
            </a>

            <button
              className="w-full sm:w-auto glass-btn inline-flex items-center gap-2 justify-center"
              onClick={() => {
                alert(`微信咨询：${studioInfo.wechat}`);
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>微信咨询</span>
            </button>
          </div>

          {/* QR Code placeholder */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-panel rounded-xl p-4 flex flex-col items-center gap-2">
              <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                <QrCode className="w-12 h-12 text-gray-300" />
              </div>
              <p className="text-xs text-gray-400">扫码添加微信</p>
              <p className="text-xs text-gray-500 font-medium">{studioInfo.wechat}</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {studioInfo.services.map((service) => (
              <button
                key={service.type}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm
                           transition-all duration-300 flex items-center gap-2 justify-center
                           active:scale-[0.98] ${
                             service.type === 'portrait'
                               ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20'
                               : 'glass-btn'
                           }`}
                onClick={() => {
                  alert(
                    service.type === 'portrait'
                      ? `预约毕业写真，请通过以下方式联系我们：\n\n📞 ${studioInfo.phone}\n💬 微信：${studioInfo.wechat}`
                      : `咨询数字纪念馆服务，请通过以下方式联系我们：\n\n📞 ${studioInfo.phone}\n💬 微信：${studioInfo.wechat}`
                  );
                }}
              >
                {iconMap[service.type]}
                <span>{service.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
