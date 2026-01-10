import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

const Terms = () => {
  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        </div>
      </Section>

      <Section background="gradient" className="min-h-[40vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-modern-lg">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-slate-700">
              Please read these terms carefully before using TrainingTree
            </p>
            <p className="text-sm text-slate-600 mt-4">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-brand-50/30 via-blue-50/20 to-purple-50/20 border-2 border-brand-200">
              <h2 className="text-3xl font-bold mb-4 text-navy-900">Agreement to Terms</h2>
              <p className="text-lg text-slate-700">
                By accessing or using TrainingTree ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Platform. These Terms apply to all users, including trainers, horse owners, veterinarians, and facility administrators.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Description of Service</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-700">
                  TrainingTree is a comprehensive equine training management platform that provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Training and workout tracking with 23+ thoroughbred-specific workout types</li>
                  <li>ACWR (Acute:Chronic Workload Ratio) calculation and monitoring for injury prevention</li>
                  <li>Patent-pending multi-sensor fusion technology combining IMU (up to 60 Hz), GPS, and video data</li>
                  <li>AI-powered workout recommendations using Random Forest and Gradient Boosting machine learning models</li>
                  <li>Real-time gait analysis with 25-keypoint pose estimation (Conv1D-LSTM neural networks)</li>
                  <li>Injury risk scoring based on ACWR (0.25 weight), progression (0.15), HRV (0.15), and fatigue (0.20)</li>
                  <li>Health monitoring with automated veterinary alerts and notifications</li>
                  <li>Financial management tools including invoicing, expense tracking, and profitability analysis</li>
                  <li>Racing and competition management with AI race predictions and gallop out metrics</li>
                  <li>Integration with 8+ wearable devices (Equimetre, Polar Equine, StrideSAFE, etc.)</li>
                  <li>Mobile applications with offline functionality and QR code horse identification</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">User Accounts & Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Account Creation</h3>
                  <p className="text-slate-700">
                    You must provide accurate, complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Acceptable Use</h3>
                  <p className="text-slate-700 mb-2">You agree to use the Platform only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful code, viruses, or malware</li>
                    <li>Attempt to gain unauthorized access to the Platform or other accounts</li>
                    <li>Interfere with or disrupt the Platform's operation</li>
                    <li>Use automated systems to access the Platform without permission</li>
                    <li>Share your account credentials with unauthorized parties</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Data Accuracy</h3>
                  <p className="text-slate-700">
                    You are responsible for the accuracy of data you enter into the Platform. While our AI algorithms provide recommendations, you retain full responsibility for training decisions and horse care.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-amber-50/30 via-blue-50/20 to-purple-50/20 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Medical Disclaimer</h2>
              </div>
              
              <p className="text-slate-700 mb-4">
                <strong>IMPORTANT:</strong> TrainingTree provides data analysis, recommendations, and alerts based on scientific algorithms and AI models. However:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>The Platform is not a substitute for professional veterinary care or medical advice</li>
                <li>Health alerts and injury risk scores are informational tools, not medical diagnoses</li>
                <li>Always consult with licensed veterinarians for medical decisions</li>
                <li>Gait analysis and symmetry metrics are aids to detection, not definitive diagnoses</li>
                <li>ACWR monitoring helps prevent overtraining but does not guarantee injury prevention</li>
                <li>You are solely responsible for all training and care decisions for your horses</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Platform Ownership</h3>
                  <p className="text-slate-700">
                    The Platform, including all software, algorithms, AI models, patent-pending technologies, and content, is owned by Equissetix and protected by intellectual property laws. Our patent-pending multi-sensor fusion technology and gait analysis algorithms are proprietary.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Your Data</h3>
                  <p className="text-slate-700">
                    You retain all ownership rights to your training data, horse information, and content you upload. By using the Platform, you grant us a license to use, process, and analyze your data to provide services and improve our algorithms (using aggregated, anonymized data).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Restrictions</h3>
                  <p className="text-slate-700">
                    You may not copy, modify, reverse engineer, or create derivative works of the Platform or its algorithms without written permission.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Subscription & Billing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Subscription Plans</h3>
                  <p className="text-slate-700">
                    TrainingTree offers subscription plans (Starter, Professional, Enterprise) with different features and pricing. Plans are billed monthly or annually as selected.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Free Trial</h3>
                  <p className="text-slate-700">
                    We offer a 14-day free trial. You may cancel at any time during the trial without charge. If you do not cancel, your subscription will begin automatically after the trial period.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Cancellation</h3>
                  <p className="text-slate-700">
                    You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. No refunds are provided for partial billing periods.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Price Changes</h3>
                  <p className="text-slate-700">
                    We reserve the right to modify pricing with 30 days' notice. Existing subscribers will be notified of price changes before they take effect.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Service Availability & Modifications</h2>
              <p className="text-slate-700 mb-4">
                We strive for 99.9% uptime but do not guarantee uninterrupted service. We may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Perform scheduled maintenance with advance notice</li>
                <li>Modify, suspend, or discontinue features with reasonable notice</li>
                <li>Update algorithms and AI models to improve accuracy and performance</li>
                <li>Add new features and integrations</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Limitation of Liability</h2>
              <p className="text-slate-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>The Platform is provided "as is" without warranties of any kind</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid in the 12 months preceding the claim</li>
                <li>We are not responsible for decisions made based on Platform recommendations</li>
                <li>We are not liable for data loss, though we maintain regular backups</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Termination</h2>
              <p className="text-slate-700 mb-4">
                We may suspend or terminate your account if you violate these Terms. You may terminate your account at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Your access to the Platform will cease</li>
                <li>You may export your data for 90 days after termination</li>
                <li>We will delete your data after the retention period, subject to legal requirements</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Governing Law</h2>
              <p className="text-slate-700">
                These Terms are governed by the laws of the United States. Any disputes will be resolved through binding arbitration, except where prohibited by law.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <Card className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-300">
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Contact Information</h2>
              <p className="text-slate-700 mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> legal@equissetix.com</p>
                <p><strong>Mail:</strong> Equissetix Legal Team, United States</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Terms
