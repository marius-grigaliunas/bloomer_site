import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AppPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 py-16 pt-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-medium hover:text-primary-deep transition-colors mb-6"
          >
            ← Back to Bloomer
          </Link>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            App&apos;s privacy policy
          </h1>
          <p className="text-text-secondary">
            Last Updated: September 30, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-background-surface rounded-lg p-8 shadow-sm space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-text-primary leading-relaxed mb-4">
                This Privacy Notice for Bloomer (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-primary mb-4">
                <li>Download and use our mobile application (Bloomer), or any other application of ours that links to this Privacy Notice</li>
                <li>Visit our website at <a href="https://bloomerapp.info" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info</a> or any website of ours that links to this Privacy Notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="text-text-primary leading-relaxed">
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>.
              </p>
            </section>

            {/* Summary Section */}
            <section className="bg-background-primary rounded-2xl p-6 border border-secondary-medium/20">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                SUMMARY OF KEY POINTS
              </h2>
              <p className="text-text-primary leading-relaxed mb-6">
                <em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em>
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-text-primary font-medium mb-2">
                    What personal information do we process?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    Do we process any sensitive personal information?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We do not process sensitive personal information. Although users may upload photos, we do not use them to extract biometric identifiers or analyze personal characteristics.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    Do we collect any information from third parties?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We may collect information from third-party services such as Google OAuth for authentication, WeatherAPI for weather data, and AI services for generating plant care guides.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    How do we process your information?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    In what situations and with which parties do we share personal information?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We may share information in specific situations and with specific third parties.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    How do we keep your information safe?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    What are your rights?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                  </p>
                </div>

                <div>
                  <p className="text-text-primary font-medium mb-2">
                    How do you exercise your rights?
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    The easiest way to exercise your rights is by visiting <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            <section className="bg-background-primary rounded-2xl p-6 border border-secondary-medium/20">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                TABLE OF CONTENTS
              </h2>
              <div className="space-y-2">
                <div><a href="#infocollect" className="text-primary-medium hover:text-primary-deep underline">1. WHAT INFORMATION DO WE COLLECT?</a></div>
                <div><a href="#infouse" className="text-primary-medium hover:text-primary-deep underline">2. HOW DO WE PROCESS YOUR INFORMATION?</a></div>
                <div><a href="#legalbases" className="text-primary-medium hover:text-primary-deep underline">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></div>
                <div><a href="#whoshare" className="text-primary-medium hover:text-primary-deep underline">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></div>
                <div><a href="#infosafe" className="text-primary-medium hover:text-primary-deep underline">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></div>
                <div><a href="#inforetain" className="text-primary-medium hover:text-primary-deep underline">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a></div>
                <div><a href="#privacyrights" className="text-primary-medium hover:text-primary-deep underline">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></div>
                <div><a href="#children" className="text-primary-medium hover:text-primary-deep underline">8. DO WE COLLECT INFORMATION FROM CHILDREN?</a></div>
                <div><a href="#DNT" className="text-primary-medium hover:text-primary-deep underline">9. CONTROLS FOR DO-NOT-TRACK FEATURES</a></div>
                <div><a href="#uslaws" className="text-primary-medium hover:text-primary-deep underline">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></div>
                <div><a href="#policyupdates" className="text-primary-medium hover:text-primary-deep underline">11. DO WE MAKE UPDATES TO THIS NOTICE?</a></div>
                <div><a href="#contact" className="text-primary-medium hover:text-primary-deep underline">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></div>
                <div><a href="#request" className="text-primary-medium hover:text-primary-deep underline">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></div>
              </div>
            </section>

            {/* Section 1: What Information Do We Collect */}
            <section id="infocollect">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                1. WHAT INFORMATION DO WE COLLECT?
              </h2>
              
              <h3 className="text-xl font-medium text-text-primary mb-3">
                Personal information you disclose to us
              </h3>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em>
              </p>
              
              <p className="text-text-primary leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Personal Information Provided by You.
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <div className="space-y-4">
                  <div>
                    <p className="text-text-primary font-medium mb-1">Email addresses:</p>
                    <p className="text-text-secondary text-sm">Collected through Google OAuth authentication</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Google Account ID:</p>
                    <p className="text-text-secondary text-sm">Used for account management and authentication</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Plant photos:</p>
                    <p className="text-text-secondary text-sm">You take up to 5 photos of plants for identification purposes; we store the first photo as a cover image for each identified plant</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Plant names and care data:</p>
                    <p className="text-text-secondary text-sm">Names of plants you identify and personalized care guides generated by our AI system, stored in JSON format</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Watering schedules:</p>
                    <p className="text-text-secondary text-sm">Information about watering needs for push notification reminders</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Device information:</p>
                    <p className="text-text-secondary text-sm">Device type, operating system version, and push notification tokens</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Location Information:</p>
                    <p className="text-text-secondary text-sm">We temporarily access your current location to provide weather information relevant to your area. <strong>Important:</strong> We do NOT store your location data. It is only sent to our weather service provider (WeatherAPI) in real-time and is not retained in our systems.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Sensitive Information.
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                We do not process sensitive information. Although users may upload photos, we do not use them to extract biometric identifiers, facial recognition data, or to analyze personal characteristics such as race, ethnicity, or health information. Photos are used solely for plant identification purposes.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Application Data.
              </h3>
              <p className="text-text-primary leading-relaxed mb-3">
                If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <div className="space-y-4">
                  <div>
                    <p className="text-text-primary font-medium mb-1">Mobile Device Access:</p>
                    <p className="text-text-secondary text-sm">We may request access or permission to certain features from your mobile device, including your mobile device&apos;s camera, location services, and notifications. If you wish to change our access or permissions, you may do so in your device&apos;s settings.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">Push Notifications:</p>
                    <p className="text-text-secondary text-sm">We may request to send you push notifications regarding watering reminders and app updates. If you wish to opt out from receiving these types of communications, you may turn them off in your device&apos;s settings.</p>
                  </div>
                </div>
              </div>

              <p className="text-text-primary leading-relaxed mb-4">
                This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
              </p>

              <p className="text-text-primary leading-relaxed mb-4">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Information automatically collected
              </h3>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>Some information — such as your device type and app usage patterns — is collected automatically when you use our Services.</em>
              </p>
              <p className="text-text-primary leading-relaxed">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as device type, operating system, app crashes, and performance metrics. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
            </section>

            {/* Section 2: How Do We Process Your Information */}
            <section id="infouse">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.</em>
              </p>
              
              <p className="text-text-primary leading-relaxed mb-4">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <div className="space-y-4">
                  <div>
                    <p className="text-text-primary font-medium mb-1">To facilitate account creation and authentication and otherwise manage user accounts.</p>
                    <p className="text-text-secondary text-sm">We may process your information so you can create and log in to your account, as well as keep your account in working order.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To identify plants from photos.</p>
                    <p className="text-text-secondary text-sm">We process photos you submit to identify plant species using artificial intelligence.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To generate personalized care guides.</p>
                    <p className="text-text-secondary text-sm">We process plant names to generate customized care instructions using AI services.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To provide weather information.</p>
                    <p className="text-text-secondary text-sm">We temporarily process your location to display current weather conditions relevant to plant care.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To send administrative information to you.</p>
                    <p className="text-text-secondary text-sm">We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To send you push notifications.</p>
                    <p className="text-text-secondary text-sm">We may process your information to send you reminders about plant watering schedules and other care-related notifications.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To improve our Services.</p>
                    <p className="text-text-secondary text-sm">We may process information about how you use our app to analyze usage patterns, improve plant identification algorithms, and develop new features.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To ensure security and prevent fraud.</p>
                    <p className="text-text-secondary text-sm">We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</p>
                  </div>
                  
                  <div>
                    <p className="text-text-primary font-medium mb-1">To save or protect an individual&apos;s vital interest.</p>
                    <p className="text-text-secondary text-sm">We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Legal Bases */}
            <section id="legalbases">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em>
              </p>
              
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                If you are located in the EU or UK, this section applies to you.
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <h4 className="text-text-primary font-medium mb-2">Consent (Article 6(1)(a) GDPR)</h4>
                <p className="text-text-secondary text-sm mb-3">We process your information with your explicit consent for:</p>
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside mb-3">
                  <li>Location access: Accessing your current location to provide weather information</li>
                  <li>Push notifications: Sending you watering reminders and app updates</li>
                  <li>Camera access: Taking photos of plants for identification</li>
                </ul>
                <p className="text-text-secondary text-sm">You can withdraw your consent at any time through your device settings or by contacting us.</p>
              </div>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <h4 className="text-text-primary font-medium mb-2">Performance of a Contract (Article 6(1)(b) GDPR)</h4>
                <p className="text-text-secondary text-sm mb-3">We process your information when necessary to fulfill our contractual obligations to provide you with our Services:</p>
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Account authentication: Processing your email and Google Account ID to create and manage your account</li>
                  <li>Plant identification: Processing photos to identify plant species</li>
                  <li>Care guide generation: Processing plant names to create personalized care guides</li>
                  <li>Plant collection management: Storing your plant photos and care data</li>
                  <li>Service delivery: Maintaining app functionality and delivering core features</li>
                </ul>
              </div>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <h4 className="text-text-primary font-medium mb-2">Legitimate Interests (Article 6(1)(f) GDPR)</h4>
                <p className="text-text-secondary text-sm mb-3">We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests:</p>
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Service improvement: Analyzing app usage patterns to enhance plant identification accuracy</li>
                  <li>Security and fraud prevention: Monitoring for suspicious activity</li>
                  <li>Technical maintenance: Ensuring app stability and performance</li>
                  <li>Business operations: Managing our business efficiently</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                If you are located in Canada, this section applies to you.
              </h3>
              <p className="text-text-primary leading-relaxed">
                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
              </p>
            </section>

            {/* Section 4: Sharing Information */}
            <section id="whoshare">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We may share information in specific situations described in this section and/or with the following third parties.</em>
              </p>
              
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Third-Party Service Providers:
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                We share your data with the following third-party service providers to enable core functionality of our Services. We have written contracts with each service provider to ensure they handle your data in accordance with this Privacy Notice and applicable data protection laws.
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20 space-y-4">
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Google OAuth (Google LLC)</h4>
                  <p className="text-text-secondary text-sm mb-1">Data shared: Email address, Google Account ID</p>
                  <p className="text-text-secondary text-sm mb-1">Purpose: User authentication and account management</p>
                  <p className="text-text-secondary text-sm mb-1">Legal basis: Contract performance</p>
                  <p className="text-text-secondary text-sm">Location: United States</p>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">WeatherAPI</h4>
                  <p className="text-text-secondary text-sm mb-1">Data shared: Current location (real-time only, not stored by us)</p>
                  <p className="text-text-secondary text-sm mb-1">Purpose: Providing weather information relevant to plant care</p>
                  <p className="text-text-secondary text-sm">Legal basis: Consent</p>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">AI/LLM Service Provider Rayon labs</h4>
                  <p className="text-text-secondary text-sm mb-1">Data shared: Plant names only</p>
                  <p className="text-text-secondary text-sm mb-1">Purpose: Generating personalized plant care guides</p>
                  <p className="text-text-secondary text-sm">Legal basis: Contract performance</p>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Cloud Storage Provider Appwrite</h4>
                  <p className="text-text-secondary text-sm mb-1">Data shared: Plant photos, care guides, user account data</p>
                  <p className="text-text-secondary text-sm mb-1">Purpose: Data storage and application functionality</p>
                  <p className="text-text-secondary text-sm">Legal basis: Contract performance</p>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Push Notification Service Firebase Cloud Messaging</h4>
                  <p className="text-text-secondary text-sm mb-1">Data shared: Device tokens, notification content (watering reminders)</p>
                  <p className="text-text-secondary text-sm mb-1">Purpose: Sending watering reminders and app notifications</p>
                  <p className="text-text-secondary text-sm">Legal basis: Consent</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                International Data Transfers:
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                We are based in Belgium (European Economic Area), but some of our service providers are located outside the EEA, including in the United States. When we transfer your personal data outside the EEA, we ensure appropriate safeguards are in place:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li><strong>Standard Contractual Clauses (SCCs):</strong> We use EU Standard Contractual Clauses approved by the European Commission</li>
                  <li><strong>Adequacy Decisions:</strong> For transfers to countries with an EU adequacy decision (e.g., UK)</li>
                  <li><strong>Additional Safeguards:</strong> Where necessary, we implement additional technical and organizational measures to protect your data</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Other Sharing Situations:
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                We may need to share your personal information in the following situations:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20 space-y-4">
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Business Transfers:</h4>
                  <p className="text-text-secondary text-sm">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Legal Requirements:</h4>
                  <p className="text-text-secondary text-sm">We may disclose your information where required by law, court order, or government regulation.</p>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">We do not:</h4>
                  <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                    <li>Sell your personal information to third parties</li>
                    <li>Share your personal information for third-party marketing purposes</li>
                    <li>Engage in targeted advertising or profiling that produces legal or similarly significant effects</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Information Security */}
            <section id="infosafe">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                5. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We aim to protect your personal information through a system of organizational and technical security measures.</em>
              </p>
              
              <p className="text-text-primary leading-relaxed mb-4">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Our security measures include:
              </h3>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Encryption in transit: All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols</li>
                  <li>Encryption at rest: Sensitive data stored on our servers is encrypted</li>
                  <li>Secure authentication: We use Google OAuth, which implements robust security standards</li>
                  <li>Access controls: Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security assessments: We periodically review our security practices</li>
                  <li>Secure infrastructure: We use reputable cloud service providers with strong security certifications</li>
                  <li>Data minimization: We only collect and retain data necessary for providing our Services</li>
                </ul>
              </div>

              <p className="text-text-primary leading-relaxed">
                Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </section>

            {/* Section 6: Data Retention */}
            <section id="inforetain">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                6. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
              </p>
              
              <p className="text-text-primary leading-relaxed mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Specific Retention Periods:
              </h3>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">Account data (email, Google ID)</p>
                    <p className="text-text-secondary text-sm text-right">Until account deletion</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">Plant photos (cover images)</p>
                    <p className="text-text-secondary text-sm text-right">Until you delete them or your account</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">Plant care guides</p>
                    <p className="text-text-secondary text-sm text-right">Until you delete them or your account</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">Location data</p>
                    <p className="text-text-secondary text-sm text-right">Not stored — processed in real-time only</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">Device tokens (push notifications)</p>
                    <p className="text-text-secondary text-sm text-right">Until you uninstall the app or revoke permissions</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">App usage analytics</p>
                    <p className="text-text-secondary text-sm text-right">24 months</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium flex-1">Backup archives</p>
                    <p className="text-text-secondary text-sm text-right">90 days after account deletion</p>
                  </div>
                </div>
              </div>

              <p className="text-text-primary leading-relaxed">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </section>

            {/* Section 7: Privacy Rights */}
            <section id="privacyrights">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                7. WHAT ARE YOUR PRIVACY RIGHTS?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information.</em>
              </p>
              
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                If you are located in the EEA, UK, Switzerland, or Canada
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>(i) Right of Access (Article 15 GDPR): Request access to and obtain a copy of your personal information</li>
                  <li>(ii) Right to Rectification (Article 16 GDPR): Request correction of inaccurate or incomplete personal information</li>
                  <li>(iii) Right to Erasure (Article 17 GDPR): Request deletion of your personal information (&quot;right to be forgotten&quot;)</li>
                  <li>(iv) Right to Restrict Processing (Article 18 GDPR): Request restriction of processing of your personal information</li>
                  <li>(v) Right to Data Portability (Article 20 GDPR): Receive your personal information in a structured, commonly used, and machine-readable format</li>
                  <li>(vi) Right to Object (Article 21 GDPR): Object to processing of your personal information based on legitimate interests</li>
                  <li>(vii) Right Not to Be Subject to Automated Decision-Making (Article 22 GDPR): Not be subject to decisions based solely on automated processing that produce legal or similarly significant effects</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Withdrawing your consent:
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Camera permission: Go to your device Settings → Apps → Bloomer → Permissions → Camera → Disable</li>
                  <li>Location permission: Go to your device Settings → Apps → Bloomer → Permissions → Location → Disable</li>
                  <li>Push notifications: Go to your device Settings → Apps → Bloomer → Notifications → Disable, or disable within the Bloomer app settings</li>
                  <li>Complete withdrawal: Contact us at bloomer.app.info@gmail.com</li>
                </ul>
              </div>

              <p className="text-text-primary leading-relaxed">
                We will consider and act upon any request in accordance with applicable data protection laws. We will respond to your request within one month, though this may be extended by two additional months in complex cases.
              </p>
            </section>

            {/* Section 8: Children's Information */}
            <section id="children">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                8. DO WE COLLECT INFORMATION FROM CHILDREN?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>We do not knowingly collect data from or market to children under 13 years of age (or 16 years of age in the European Economic Area).</em>
              </p>
              
              <p className="text-text-primary leading-relaxed mb-4">
                We do not knowingly collect, solicit data from, or market to children under 13 years of age (or under 16 years of age if located in the EEA, UK, or Switzerland), nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 13 (or 16 if in the EEA, UK, or Switzerland) or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services.
              </p>

              <p className="text-text-primary leading-relaxed">
                If we learn that personal information from users less than 13 years of age (or 16 in the EEA) has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 13 (or 16), please contact us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>.
              </p>
            </section>

            {/* Section 9: Do-Not-Track */}
            <section id="DNT">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                9. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h2>
              <p className="text-text-primary leading-relaxed mb-4">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
              </p>

              <p className="text-text-primary leading-relaxed mb-4">
                At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Tracking and Analytics:
              </h3>
              <p className="text-text-primary leading-relaxed">
                We do not use cookies or third-party analytics tools (such as Google Analytics) in our mobile application. We do not track your browsing activity across other websites or apps. Any app performance data we collect is limited to crash reports and basic usage metrics necessary to maintain and improve the app, and this data is not used for advertising or shared with third parties for marketing purposes.
              </p>
            </section>

            {/* Section 10: US Residents Rights */}
            <section id="uslaws">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it.</em>
              </p>
              
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Categories of Personal Information We Collect
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                We have collected the following categories of personal information in the past twelve (12) months:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20 space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-text-primary font-medium">A. Identifiers</p>
                    <p className="text-green-600 text-sm font-semibold">YES</p>
                  </div>
                  <p className="text-text-secondary text-sm">Contact details, such as email address, Google Account ID, and device identifiers</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-text-primary font-medium">G. Geolocation data</p>
                    <p className="text-green-600 text-sm font-semibold">YES</p>
                  </div>
                  <p className="text-text-secondary text-sm">Device location (collected in real-time only for weather information, not stored)</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-text-primary font-medium">H. Audio, electronic, sensory, or similar information</p>
                    <p className="text-green-600 text-sm font-semibold">YES</p>
                  </div>
                  <p className="text-text-secondary text-sm">Images (plant photos) created in connection with our business activities</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Your Rights
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Right to know whether or not we are processing your personal data</li>
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccuracies in your personal data</li>
                  <li>Right to request the deletion of your personal data</li>
                  <li>Right to obtain a copy of the personal data you previously shared with us</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                How to Exercise Your Rights
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                To exercise these rights, you can contact us:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>By visiting <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a></li>
                  <li>By emailing us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a></li>
                  <li>By using the in-app account deletion feature</li>
                </ul>
              </div>

              <p className="text-text-primary leading-relaxed">
                We will respond to your verifiable request within 45 days of receipt. If we require more time (up to an additional 45 days), we will inform you of the reason and extension period in writing.
              </p>
            </section>

            {/* Section 11: Updates */}
            <section id="policyupdates">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                11. DO WE MAKE UPDATES TO THIS NOTICE?
              </h2>
              <p className="text-text-secondary text-sm mb-2">
                <strong><em>In Short:</em></strong> <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
              </p>
              
              <p className="text-text-primary leading-relaxed mb-4">
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification via email or push notification.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Material changes include:
              </h3>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Changes to the types of personal information we collect</li>
                  <li>Changes to how we use or share your personal information</li>
                  <li>Changes to your rights regarding your personal information</li>
                  <li>Changes to our data retention practices</li>
                </ul>
              </div>

              <p className="text-text-primary leading-relaxed">
                We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            {/* Section 12: Contact */}
            <section id="contact">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h2>
              <p className="text-text-primary leading-relaxed mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a> or visit <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a>.
              </p>

              <div className="bg-background-primary rounded-xl p-6 border border-secondary-medium/20">
                <p className="text-text-primary font-semibold mb-3">Data Controller:</p>
                <p className="text-text-primary mb-1">Bloomer</p>
                <p className="text-text-primary mb-1">Boomlaarstraat 108, bus 4</p>
                <p className="text-text-primary mb-1">2500, Lier</p>
                <p className="text-text-primary mb-1">Belgium</p>
                <p className="text-text-primary">European Union</p>
              </div>
            </section>

            {/* Section 13: Data Management */}
            <section id="request">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </h2>
              <p className="text-text-primary leading-relaxed mb-4">
                Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                To request to delete your personal information:
              </h3>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20 space-y-4">
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Option 1: Through the Bloomer App</h4>
                  <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                    <li>Open the Bloomer app</li>
                    <li>Go to Settings → Account</li>
                    <li>Select &quot;Delete My Account&quot; to permanently delete your account and all associated data</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Option 2: Contact Us</h4>
                  <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                    <li>Visit: <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a></li>
                    <li>Email: <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a></li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                What happens when you delete your account?
              </h3>
              <p className="text-text-primary leading-relaxed mb-4">
                Upon account deletion, the following data will be permanently removed:
              </p>

              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Your email address and Google Account ID</li>
                  <li>All plant photos you uploaded</li>
                  <li>All plant care guides and plant collection data</li>
                  <li>Your watering schedules and notification preferences</li>
                  <li>Device tokens and app settings</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Timeline:
              </h3>
              <div className="bg-background-primary rounded-xl p-6 mb-4 border border-secondary-medium/20">
                <ul className="text-text-secondary text-sm space-y-1 list-disc list-inside">
                  <li>Immediate: Your account will be deactivated and you will no longer be able to log in</li>
                  <li>Within 30 days: All data will be deleted from our active databases</li>
                  <li>Within 90 days: All data will be deleted from backup archives</li>
                </ul>
              </div>

              <div className="bg-background-primary rounded-xl p-6 border border-secondary-medium/20">
                <h4 className="text-text-primary font-semibold mb-4">Summary of Your Privacy Rights</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium">Access</p>
                    <p className="text-text-secondary text-sm text-right">Get a copy of your personal data</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium">Rectification</p>
                    <p className="text-text-secondary text-sm text-right">Correct inaccurate data</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium">Erasure</p>
                    <p className="text-text-secondary text-sm text-right">Delete your personal data</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium">Data Portability</p>
                    <p className="text-text-secondary text-sm text-right">Receive your data in machine-readable format</p>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-text-primary font-medium">Withdraw Consent</p>
                    <p className="text-text-secondary text-sm text-right">Revoke camera, location, or notification permissions</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-primary-medium rounded-2xl p-6">
              <h3 className="text-white text-lg font-bold mb-3">
                Questions or Concerns?
              </h3>
              <p className="text-white leading-relaxed mb-4">
                If you have any questions about this Privacy Notice or our privacy practices, please don&apos;t hesitate to contact us.
              </p>
              <div className="bg-white/20 rounded-xl p-4">
                <p className="text-white font-medium mb-2">Contact Information:</p>
                <p className="text-white text-sm">Email: bloomer.app.info@gmail.com</p>
                <p className="text-white text-sm">Website: https://bloomerapp.info/contact</p>
              </div>
            </section>

            {/* Thank You Message */}
            <section className="bg-background-primary rounded-2xl p-6 border border-secondary-medium/20">
              <h3 className="text-text-primary text-lg font-bold mb-3">
                Thank you for using Bloomer!
              </h3>
              <p className="text-text-primary leading-relaxed">
                We are committed to protecting your privacy and providing transparency about how we handle your personal information. If you have any questions about this Privacy Notice or our privacy practices, please don&apos;t hesitate to contact us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>.
              </p>
            </section>

          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
