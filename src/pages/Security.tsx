import { motion } from 'framer-motion'
import { Shield, Lock, Key, Eye, Server, CheckCircle, AlertTriangle } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Breadcrumbs from '../components/Breadcrumbs'

const Security = () => {
  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Security' }]} />
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
              Security & <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-xl text-slate-700">
              Enterprise-grade security protecting your sensitive training data
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
              <h2 className="text-3xl font-bold mb-4 text-navy-900">Our Security Commitment</h2>
              <p className="text-lg text-slate-700 mb-4">
                TrainingTree handles sensitive equine training data, health records, and proprietary information. We implement bank-level security measures to protect your data at every layer of our platform.
              </p>
              <p className="text-lg text-slate-700">
                Security is not an afterthought—it's built into every aspect of our architecture, from data collection through our patent-pending multi-sensor fusion technology to AI model processing and storage.
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
                  <Lock className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Data Encryption</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Encryption in Transit</h3>
                  <p className="text-slate-700">
                    All data transmitted between your devices and our servers is encrypted using TLS 1.3, the latest and most secure transport layer security protocol. This protects your data from interception during transmission.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Encryption at Rest</h3>
                  <p className="text-slate-700">
                    All stored data, including training logs, health records, gait analysis data, and AI model outputs, is encrypted using AES-256 encryption. This includes data in databases, backups, and file storage systems.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Key Management</h3>
                  <p className="text-slate-700">
                    Encryption keys are managed using industry-standard key management services with automatic rotation and secure key storage. Keys never leave secure hardware security modules (HSMs).
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
                  <Key className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Access Control & Authentication</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Multi-Factor Authentication (MFA)</h3>
                  <p className="text-slate-700">
                    Enterprise plans include mandatory MFA to prevent unauthorized access. We support TOTP authenticator apps, SMS, and hardware security keys.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Role-Based Access Control (RBAC)</h3>
                  <p className="text-slate-700">
                    Granular permissions ensure users only access data they're authorized to view. Trainers see their horses, owners see their horses, and veterinarians see only horses they're assigned to.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Session Management</h3>
                  <p className="text-slate-700">
                    Secure session tokens with automatic expiration, IP address validation, and device fingerprinting help prevent session hijacking and unauthorized access.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Password Security</h3>
                  <p className="text-slate-700">
                    Passwords are hashed using bcrypt with salt. We enforce strong password requirements and provide password strength indicators. Passwords are never stored in plain text.
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
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <Server className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Infrastructure Security</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Cloud Infrastructure</h3>
                  <p className="text-slate-700">
                    We use leading cloud providers (AWS, Azure) with SOC 2 Type II certification. Infrastructure is deployed across multiple availability zones for redundancy and disaster recovery.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Network Security</h3>
                  <p className="text-slate-700">
                    Firewalls, intrusion detection systems (IDS), and distributed denial-of-service (DDoS) protection guard against external threats. Network traffic is monitored 24/7 for anomalies.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Vulnerability Management</h3>
                  <p className="text-slate-700">
                    Regular security scans, penetration testing, and automated vulnerability assessments identify and remediate security issues. Critical patches are applied within 24 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Secure Development</h3>
                  <p className="text-slate-700">
                    Our development process follows secure coding practices, code reviews, and automated security testing. Our patent-pending algorithms undergo rigorous security audits before deployment.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-success-50/30 via-blue-50/20 to-purple-50/20 border-2 border-success-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Compliance & Certifications</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">SOC 2 Type II</h3>
                  <p className="text-slate-700">
                    We maintain SOC 2 Type II certification, demonstrating our commitment to security, availability, processing integrity, confidentiality, and privacy controls.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">HIPAA Ready</h3>
                  <p className="text-slate-700">
                    Our infrastructure and processes are designed to meet HIPAA requirements for protected health information (PHI). We can execute Business Associate Agreements (BAAs) for healthcare providers.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">GDPR Compliance</h3>
                  <p className="text-slate-700">
                    We comply with GDPR requirements for EU users, including data portability, right to deletion, and privacy by design principles.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Regular Audits</h3>
                  <p className="text-slate-700">
                    Third-party security firms conduct annual audits of our systems, processes, and code. Audit reports are available to Enterprise customers upon request.
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Monitoring & Incident Response</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">24/7 Security Monitoring</h3>
                  <p className="text-slate-700">
                    Our Security Operations Center (SOC) monitors systems around the clock for security threats, anomalies, and unauthorized access attempts. Automated alerts trigger immediate response protocols.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Audit Logging</h3>
                  <p className="text-slate-700">
                    Comprehensive audit logs record all data access, modifications, and system events. Logs are tamper-proof, retained for compliance, and regularly reviewed for suspicious activity.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Incident Response</h3>
                  <p className="text-slate-700">
                    We maintain a documented incident response plan. In the event of a security incident, we will notify affected users within 72 hours as required by law and take immediate remediation steps.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Threat Intelligence</h3>
                  <p className="text-slate-700">
                    We subscribe to threat intelligence feeds and stay current on emerging security threats. Our systems are updated to defend against the latest attack vectors.
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
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Data Backup & Recovery</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Automated Backups</h3>
                  <p className="text-slate-700">
                    Daily automated backups of all data, including training records, health metrics, and AI model outputs. Backups are encrypted and stored in geographically distributed locations.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Point-in-Time Recovery</h3>
                  <p className="text-slate-700">
                    We maintain point-in-time recovery capabilities, allowing restoration to any point within the retention period. Recovery time objectives (RTO) are under 4 hours.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Disaster Recovery</h3>
                  <p className="text-slate-700">
                    Our disaster recovery plan ensures business continuity. Regular disaster recovery drills test our ability to restore services quickly in the event of catastrophic failure.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Card>
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Third-Party Security</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Vendor Security</h3>
                  <p className="text-slate-700">
                    All third-party vendors and service providers undergo security assessments. We only work with vendors that meet our security standards and sign confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">API Security</h3>
                  <p className="text-slate-700">
                    Our APIs use OAuth 2.0 authentication, rate limiting, and request validation. API keys are encrypted and rotated regularly. All API traffic is logged and monitored.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-navy-900">Integration Security</h3>
                  <p className="text-slate-700">
                    Wearable device integrations (Equimetre, Polar Equine, StrideSAFE, etc.) use secure, encrypted connections. Our patent-pending multi-sensor fusion technology processes data securely without exposing raw sensor data.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-amber-50/30 via-blue-50/20 to-purple-50/20 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900">Security Best Practices for Users</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-700 mb-4">
                  Security is a shared responsibility. Here's how you can help protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Use strong, unique passwords and enable MFA when available</li>
                  <li>Keep your mobile app and devices updated with latest security patches</li>
                  <li>Don't share account credentials with unauthorized users</li>
                  <li>Log out of shared devices and use secure networks when possible</li>
                  <li>Report suspicious activity immediately to security@equissetix.com</li>
                  <li>Review access logs regularly to ensure only authorized users are accessing your data</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-300">
              <h2 className="text-2xl font-bold mb-4 text-navy-900">Security Contact</h2>
              <p className="text-slate-700 mb-4">
                For security concerns, vulnerability reports, or questions about our security practices:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Security Team:</strong> security@equissetix.com</p>
                <p><strong>Vulnerability Reports:</strong> security@equissetix.com (we respond within 48 hours)</p>
                <p><strong>Security Documentation:</strong> Available to Enterprise customers upon request</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Security
