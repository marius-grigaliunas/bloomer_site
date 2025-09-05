import Link from 'next/link';

export default function PrivacyPolicy() {
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
            PRIVACY POLICY
          </h1>
          <p className="text-text-secondary">
            Last updated September 04, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-background-surface rounded-lg p-8 shadow-sm space-y-8">
            
            <section>
              <p className="text-text-secondary leading-relaxed">
                This Privacy Notice for Bloomer (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mt-4">
                <li>Visit our website at <a href="https://bloomerapp.info" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info</a> or any website of ours that links to this Privacy Notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                SUMMARY OF KEY POINTS
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em>
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered &quot;special&quot; or &quot;sensitive&quot; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                TABLE OF CONTENTS
              </h2>
              <div className="space-y-2">
                <div><a href="#infocollect" className="text-primary-medium hover:text-primary-deep underline">1. WHAT INFORMATION DO WE COLLECT?</a></div>
                <div><a href="#infouse" className="text-primary-medium hover:text-primary-deep underline">2. HOW DO WE PROCESS YOUR INFORMATION?</a></div>
                <div><a href="#legalbases" className="text-primary-medium hover:text-primary-deep underline">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></div>
                <div><a href="#whoshare" className="text-primary-medium hover:text-primary-deep underline">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></div>
                <div><a href="#inforetain" className="text-primary-medium hover:text-primary-deep underline">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a></div>
                <div><a href="#privacyrights" className="text-primary-medium hover:text-primary-deep underline">6. WHAT ARE YOUR PRIVACY RIGHTS?</a></div>
                <div><a href="#DNT" className="text-primary-medium hover:text-primary-deep underline">7. CONTROLS FOR DO-NOT-TRACK FEATURES</a></div>
                <div><a href="#uslaws" className="text-primary-medium hover:text-primary-deep underline">8. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></div>
                <div><a href="#policyupdates" className="text-primary-medium hover:text-primary-deep underline">9. DO WE MAKE UPDATES TO THIS NOTICE?</a></div>
                <div><a href="#contact" className="text-primary-medium hover:text-primary-deep underline">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></div>
                <div><a href="#request" className="text-primary-medium hover:text-primary-deep underline">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></div>
              </div>
            </section>

            <section id="infocollect">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                1. WHAT INFORMATION DO WE COLLECT?
              </h2>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                Personal information you disclose to us
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
                <li>Email addresses</li>
              </ul>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
            </section>

            <section id="infouse">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
                <li><strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot; below.</li>
                <li><strong>To save or protect an individual&apos;s vital interest.</strong> We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.</li>
              </ul>
            </section>

            <section id="legalbases">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><u>If you are located in the EU or UK, this section applies to you.</u></strong>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
                <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</li>
                <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                  <ul className="list-disc list-inside space-y-1 text-text-secondary mt-2 ml-4">
                    <li>Send users information about special offers and discounts on our products and services</li>
                  </ul>
                </li>
                <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
              </ul>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><u><em>If you are located in Canada, this section applies to you.</em></u></strong>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mt-4">
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                <li>If identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by the regulations</li>
                <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
              </ul>
            </section>

            <section id="whoshare">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>We may share information in specific situations described in this section and/or with the following third parties.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We may need to share your personal information in the following situations:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
            </section>

            <section id="inforetain">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We will only keep your personal information until your request to delete it for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </section>

            <section id="privacyrights">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                6. WHAT ARE YOUR PRIVACY RIGHTS?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">UK data protection authority</a>.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">Federal Data Protection and Information Commissioner</a>.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                  </p>
                </div>
                
                <div>
                  <p className="text-text-secondary leading-relaxed">
                    <strong><u>Opting out of marketing and promotional communications:</u></strong> You can unsubscribe from our marketing and promotional communications at any time by contacting us using the details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                  </p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed">
                If you have questions or comments about your privacy rights, you may email us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>.
              </p>
            </section>

            <section id="DNT">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                7. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
              </p>
            </section>

            <section id="uslaws">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                8. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em>
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                Categories of Personal Information We Collect
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section &quot;WHAT INFORMATION DO WE COLLECT?&quot; above.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-secondary-medium/30">
                  <thead>
                    <tr className="bg-background-primary">
                      <th className="border border-secondary-medium/30 p-3 text-left font-semibold text-text-primary">Category</th>
                      <th className="border border-secondary-medium/30 p-3 text-left font-semibold text-text-primary">Examples</th>
                      <th className="border border-secondary-medium/30 p-3 text-center font-semibold text-text-primary">Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">A. Identifiers</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">B. Personal information as defined in the California Customer Records statute</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Name, contact information, education, employment, employment history, and financial information</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">C. Protected classification characteristics under state or federal law</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">D. Commercial information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Transaction information, purchase history, financial details, and payment information</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">E. Biometric information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Fingerprints and voiceprints</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">F. Internet or other similar network activity</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">G. Geolocation data</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Device location</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">H. Audio, electronic, sensory, or similar information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Images and audio, video or call recordings created in connection with our business activities</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">I. Professional or employment-related information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">J. Education Information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Student records and directory information</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">K. Inferences drawn from collected personal information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual&apos;s preferences and characteristics</td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary">L. Sensitive personal Information</td>
                      <td className="border border-secondary-medium/30 p-3 text-text-secondary"></td>
                      <td className="border border-secondary-medium/30 p-3 text-center text-text-secondary">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-text-secondary leading-relaxed mt-4">
                We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mt-4">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
              
              <p className="text-text-secondary leading-relaxed mt-4">
                We will use and retain the collected personal information as needed to provide the Services or for: As long as the user has an account with us
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2 mt-6">
                Sources of Personal Information
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Learn more about the sources of personal information we collect in &quot;WHAT INFORMATION DO WE COLLECT?&quot; above.
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                How We Use and Share Personal Information
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Learn more about how we use your personal information in the section, &quot;HOW DO WE PROCESS YOUR INFORMATION?&quot; above.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>Will your information be shared with anyone else?</strong>
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&quot; above.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal information.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                Your Rights
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
                <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
                <li><strong>Right to access</strong> your personal data</li>
                <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
                <li><strong>Right to request</strong> the deletion of your personal data</li>
                <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
                <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
                <li><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California&apos;s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&quot;profiling&quot;)</li>
              </ul>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending upon the state where you live, you may also have the following rights:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
                <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Minnesota)</li>
                <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
              </ul>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                How to Exercise Your Rights
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                To exercise these rights, you can contact us by visiting <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a>, or by referring to the contact details at the bottom of this document.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                Request Verification
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                Appeals
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
              </p>
              
              <h3 className="text-xl font-medium text-text-primary mb-2">
                California &quot;Shine The Light&quot; Law
              </h3>
              <p className="text-text-secondary leading-relaxed">
                California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
              </p>
            </section>

            <section id="policyupdates">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                9. DO WE MAKE UPDATES TO THIS NOTICE?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong><em>In Short:</em></strong> <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:bloomer.app.info@gmail.com" className="text-primary-medium hover:text-primary-deep underline">bloomer.app.info@gmail.com</a>
              </p>
              
            </section>

            <section id="request">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="https://bloomerapp.info/contact" target="_blank" rel="noopener noreferrer" className="text-primary-medium hover:text-primary-deep underline">https://bloomerapp.info/contact</a>.
              </p>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-secondary-medium/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © 2025 Bloomer. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-primary-medium hover:text-primary-deep transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="text-primary-medium hover:text-primary-deep transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}