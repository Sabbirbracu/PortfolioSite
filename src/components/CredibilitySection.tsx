import { motion } from "framer-motion";
import { Rocket, Globe, Clock, Layers } from "lucide-react";

const metrics = [
  {
    icon: Rocket,
    value: "17+",
    label: "Production-Grade Projects",
  },
  {
    icon: Globe,
    value: "International",
    label: "Client Experience",
  },
  {
    icon: Clock,
    value: "3+",
    label: "Years Engineering Practice",
  },
  {
    icon: Layers,
    value: "End-to-End",
    label: "Design → Deployment",
  },
];

const CredibilitySection = () => {
  return (
    <section className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;