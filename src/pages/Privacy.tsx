import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

const Privacy = () => {
  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-slate-700">
              Your data privacy and security are our top priorities
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
              <h2 className="text-3xl font-bold mb-4 text-navy-900">Our Commitment to Privacy</h2>
              <p className="text-lg text-slate-700 mb-4">
                Equissetix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our TrainingTree platform and related services.
              </p>
              <p className="text-lg text-slate-700">
                We understand that horse training data is sensitive and proprietary. We treat your data with the same care we would want for our own.
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
                <h2 className="text-2xl font-bold text-navy-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Account Information</h3>
                  <p className="text-slate-700">
                    When you create an account, we collect your name, email address, phone number, and organization details. This information is used to provide and improve our services.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Horse Training Data</h3>
                  <p className="text-slate-700">
                    We collect comprehensive training data including workout logs, health metrics, gait analysis data, GPS routes, and performance records. This data is essential for providing our AI-powered insights and injury prevention features.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Wearable Device Data</h3>
                  <p className="text-slate-700">
                    When you integrate wearable devices (Equimetre, Polar Equine, StrideSAFE, etc.), we automatically sync biometric data including heart rate, gait metrics, and activity data. This data is processed using our patent-pending multi-sensor fusion technology.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Usage Data</h3>
                  <p className="text-slate-700">
                    We collect information about how you interact with our platform, including features used, pages visited, and time spent. This helps us improve the user experience.
                  </p>
                </div>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Provide AI-powered training recommendations using Random Forest and Gradient Boosting models</li>
                    <li>Calculate ACWR (Acute:Chronic Workload Ratio) for injury prevention</li>
                    <li>Perform real-time gait analysis using our 25-keypoint pose estimation technology</li>
                    <li>Generate injury risk scores based on ACWR, progression, HRV, and fatigue metrics</li>
                    <li>Deliver automated health alerts and veterinary notifications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Platform Improvement</h3>
                  <p className="text-slate-700">
                    We use aggregated, anonymized data to improve our algorithms, develop new features, and enhance the platform. Individual horse data is never shared or used for purposes other than your account.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Communication</h3>
                  <p className="text-slate-700">
                    We may send you service-related communications, updates about new features, and important security notices. You can opt out of marketing communications at any time.
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
            <Card className="bg-gradient-to-br from-success-50/30 via-blue-50/20 to-purple-50/20 border-2 border-success-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Data Security</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-700">
                  We implement industry-leading security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li><strong>Access Controls:</strong> Role-based access control ensures only authorized users can view data</li>
                  <li><strong>Audit Logs:</strong> Comprehensive logging of all data access and modifications</li>
                  <li><strong>Regular Security Audits:</strong> Third-party security assessments and penetration testing</li>
                  <li><strong>Compliance:</strong> SOC 2 Type II certified, HIPAA-ready infrastructure</li>
                  <li><strong>Backup & Recovery:</strong> Automated daily backups with point-in-time recovery</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Data Sharing & Disclosure</h2>
              <p className="text-slate-700 mb-4">
                We do not sell, rent, or trade your personal information or horse training data. We may share data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Service Providers:</strong> Trusted third-party services (hosting, analytics) that help us operate the platform, under strict confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing, such as with veterinarians or other trainers</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Your Rights & Choices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Access & Portability</h3>
                  <p className="text-slate-700">
                    You can access, download, and export all your data at any time through the platform. We support export in CSV, PDF, and Excel formats.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Correction & Deletion</h3>
                  <p className="text-slate-700">
                    You can update or correct your information at any time. You can request deletion of your account and data, subject to legal retention requirements.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Opt-Out</h3>
                  <p className="text-slate-700">
                    You can opt out of marketing communications while still receiving essential service notifications.
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
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Data Retention</h2>
              <p className="text-slate-700">
                We retain your data for as long as your account is active or as needed to provide services. After account cancellation, we retain data for 90 days to allow for account recovery, then securely delete it unless legal requirements mandate longer retention.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Children's Privacy</h2>
              <p className="text-slate-700">
                TrainingTree is designed for professional trainers and horse owners. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Changes to This Policy</h2>
              <p className="text-slate-700">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through the platform. Your continued use after changes constitutes acceptance of the updated policy.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-300">
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Contact Us</h2>
              <p className="text-slate-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> privacy@equissetix.com</p>
                <p><strong>Mail:</strong> Equissetix Privacy Team, United States</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Privacy
