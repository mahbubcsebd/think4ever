'use client';

import PageBanner from '@/components/sections/PageBanner';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [lang, setLang] = useState('en'); // 'en' or 'fr'

  // Fade-in animation for articles on scroll
  const articleAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <PageBanner
        title="Terms & Conditions"
        bgImage="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
      />

      {/* Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Meta info & Language Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-gray-100 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[13px] text-gray-400">
            <span>
              Effective Date:{' '}
              <strong className="text-gray-600">June 6, 2026</strong>
            </span>
            <span className="hidden sm:inline text-gray-200">|</span>
            <span>
              Last Updated:{' '}
              <strong className="text-gray-600">June 6, 2026</strong>
            </span>
          </div>

          {/* Language Switcher Tabs */}
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-full border border-zinc-200/50 w-fit">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white shadow-md'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'fr'
                  ? 'bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white shadow-md'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Français
            </button>
          </div>
        </div>

        {/* Prose content */}
        <div className="space-y-12">
          {lang === 'en' ? (
            /* English Version */
            <div className="space-y-12">
              <motion.div {...articleAnimation} className="border-b border-gray-100 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937] tracking-tight">
                  USER AGREEMENT (INDIVIDUAL)
                </h1>
              </motion.div>

              {/* Article 1 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 1. PURPOSE OF THE AGREEMENT
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  The MPay Wallet (hereinafter, &quot;MPAYNETWORK&quot;), as part of its attributions, makes available to its individual customers, holders of individual accounts or joint accounts opened in their books, (hereinafter, &quot;the USER&quot;), internet access, (hereinafter, the MPay Wallet service) allowing them to carry out various digital wallet transactions, in particular:
                </p>
                <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc my-4">
                  <li>mPay Wallet registration</li>
                  <li>Scan QR of Merchant Stores</li>
                  <li>Wallet fund transfer to another mPay Users</li>
                  <li>Payment and Mobile Top-Up</li>
                  <li>Send money to Email or Phone Number</li>
                </ul>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  This agreement defines the terms and conditions of access and operation of the online service.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8] mt-2">
                  For greater certainty, all of the Bank&apos;s agreements previously signed by the user will continue to apply.
                </p>
              </motion.div>

              {/* Article 2 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 2.- REGISTRATION FOR THE SERVICE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Any natural or legal person, legally capable, holder of an individual account or joint account opened in the books of MPAYNETWORK, of a credit, debit or prepaid card, denominated in HTG or USD will be able to benefit from all the online services offered by MPAYNETWORK as they become available.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  During the registration process and before final acceptance, the customer will have access to all accounts.
                </p>
              </motion.div>

              {/* Article 3 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 3.- METHODS OF IDENTIFICATION
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Access to the service is dependent on an access code consisting of a username and password chosen by the cardholder.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  As the password is confidential, the user will take all measures to ensure its conservation and security, by not communicating it to third parties. Therefore, any operation initiated from the username is presumed to be from the user himself.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  In the case of a joint or collective account, access to the service is granted to all co-holders, agents or co-signatories of the account. However, the latter are jointly and severally obliged to strictly comply with the online banking agreement as established by the bank and to comply with its terms.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  &quot;Users&quot; means any natural person to whom MPAYNETWORK gives access to accounts domiciled at his or her premises from online banking services.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  &quot;Security PIN or OTP&quot; means a one-time security code sent to the customer to authorize certain types of electronic transactions.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  &quot;Confirmation Number&quot; means the number provided to the Customer by MPAYNETWORK to confirm the execution of an electronic transaction. This number may be used by the customer for follow-up or complaint purposes.
                </p>
              </motion.div>

              {/* Article 4 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 4.- ADDITION OF ACCOUNTS
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  If the customer is already a member, any new account will be automatically included in his or her assets. If the latter does not wish to do so, he will contact the department concerned, which will take it into account.
                </p>
              </motion.div>

              {/* Article 5 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 5.- RIGHTS AND OBLIGATIONS OF MPAYNETWORKONLINE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  MPAYNETWORK ensures the proper execution of the orders received and the confidentiality of the personal information collected as part of the service. It undertakes not to disclose or transmit it except in the event of management of this information or within the framework of legal and regulatory obligations. In this respect, it reminds the user that, except in cases where the law provides for it, professional secrecy cannot be invoked against MPAYNETWORK or the judicial authority acting in the context of criminal proceedings.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  In order to ensure optimal security for its subscribers, MPAYNETWORK undertakes to never communicate, even if the request seems to come from the online service, the password by telephone.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  MPAYNETWORKONLINE undertakes to implement and make all possible efforts on a technical level to ensure the proper functioning of the online services, as well as the confidentiality of the information communicated. It may also, without prior notice, block the connection in the event of a fraudulent maneuver or interrupt the service without having to justify itself or be held responsible for the consequences that would result.
                </p>
              </motion.div>

              {/* Article 6 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 6.- Rights of the USER
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-2">
                  The User, within the framework of this Agreement, undertakes to:
                </p>
                <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc">
                  <li>Provide MPAYNETWORK with any personal information required for the purposes of its identification and the creation of its file;</li>
                  <li>Do not communicate your password to third parties;</li>
                  <li>Change your password yourself in the event that it is accessible by third parties;</li>
                  <li>Assume any loss and/or pecuniary consequences resulting from the use of his/her access code as a result of his/her negligence;</li>
                  <li>Verify the transactions made on his/her account(s) and notify the bank of any related errors;</li>
                  <li>Not to use the infrastructure and system made available to them by MPAYNETWORK in a manner contrary to this agreement, in a fraudulent or illegal manner and/or in a manner detrimental to the security and efficiency of the Service;</li>
                  <li>Not to carry out any illicit transactions using this service;</li>
                  <li>The company and its designated users jointly and severally undertake not to use the services in violation of the instructions issued by MPAYNETWORK, in a fraudulent or illegal manner and/or in a manner detrimental to the security and efficiency of said service. It also undertakes not to carry out, from this site, any illicit transaction that could harm the MPAYNETWORK site and/or third parties.</li>
                </ul>
              </motion.div>

              {/* Article 7 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 7.- LIMITATION OF LIABILITY
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  MPAYNETWORKONLINE uses high-performance security tools, but it cannot guarantee the total security of the data transmitted on the online services;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  It cannot be held liable when the non-performance of its obligations results from elements beyond its control;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Nor can it be held liable in the event of fraudulent access to the customer&apos;s information by means of messages from third parties usurping the identity of the bank;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  MPAYNETWORKOnline does not guarantee the operational security of telecom networks. It cannot, therefore, be held liable with regard to the transport of information or the consequences resulting from a lack of security or reliability of the connection terminal used by the customer;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Nor can MPAYNETWORKOnline assume the consequences that would result from a transmission or handling error on the part of the customer.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  In the event of any discrepancy between the information appearing on the site and that recorded on the bank statement, the parties expressly agree that the latter shall prevail.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Transactions made by MPAYNETWORKOnline will automatically obtain an internal reference number. Each transaction carried out will be kept by the Bank in electronic format. If necessary, the recording will serve as proof.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Transactions will be executed subject to the available balance of the account and the User&apos;s other commitments to MPAYNETWORK. All transactions made via MPAYNETWORKOnline or MaMPAYNETWORK will be recorded according to the banking and financial standards of imputation.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Any transaction initiated online requiring follow-up in branch such as: bank certificates, delivery of executive checks, checkbook delivery, etc. will be available at the location of the customer&apos;s choice within one (1) business day (weekdays).
                </p>
              </motion.div>

              {/* Article 8 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 8.- USE OF THE SERVICE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Membership of MPAYNETWORK online services allows the user to consult all the accounts attached to his assets.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  MPAYNETWORKOnline offers the user who accepts it, a service allowing him to access his assets remotely and to carry out the various banking transactions listed in Article 1 through the Internet.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  The user who subscribes to the MPAYNETWORKOnline service expressly acknowledges that he or she has read all the information on the content of the service, its characteristics, its availability and its operating methods.
                </p>
              </motion.div>

              {/* Article 9 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 9 - DURATION AND TERMINATION OF THE CONTRACT
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Membership of the Online Service is concluded for a full period of one (1) year, renewable by tacit agreement, unless otherwise specified by one of the two parties. It will come into force from the date of confirmation of the acceptance by the Administration of the MPAYNETWORKOnline of the Company&apos;s membership.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  The user who does not wish to renew this agreement shall notify the MPAYNETWORKOnline Administration by letter with acknowledgement of receipt at least one (1) month before its expiry date.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Termination of the membership contract will result in the automatic interruption of the MPAYNETWORKOnline service. In this case, the customer will no longer be able to consult his assets or carry out transactions online.
                </p>
              </motion.div>

              {/* Article 10 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 10 - MODIFICATION OF THE SERVICE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  In view of technological developments and possible improvements to the service, MPAYNETWORKOnline reserves the right to change the scope of the services offered online at any time and to make appropriate changes to the conditions of this agreement. The customer will be notified prior to the effective date.
                </p>
              </motion.div>

              {/* Article 11 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 11: COMPLAINT
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  The fact that MPAYNETWORK refrains from claiming or belatedly claiming the application of any of the clauses contained in this agreement does not imply any waiver of its rights or acquiescence.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Any complaint must then be made within the deadline, by registered letter with acknowledgement of receipt addressed to the MPAYNETWORKOnline Administration.
                </p>
              </motion.div>

              {/* Article 12 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 12: TERMINATION
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-2">
                  MPAYNETWORK may terminate this agreement in the following cases:
                </p>
                <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc">
                  <li>Death of the USER;</li>
                  <li>Fraudulent use of the Service by the USER;</li>
                  <li>Failure by the USER to comply with its obligations, as defined by this agreement;</li>
                  <li>Upon formal request of the customer;</li>
                  <li>In any other case deemed necessary by the Bank.</li>
                </ul>
              </motion.div>

              {/* Article 13 */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 13: DISPUTES AND GENERAL PROVISIONS
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  The parties undertake to perform the clauses of this contract in good faith. In the event of a dispute relating to a banking transaction carried out from the Service, the USER agrees to contact a representative of MPAYNETWORK in order to resolve the dispute amicably. To this end, the USER undertakes to cooperate with MPAYNETWORK by providing it with any information, document, data that may advance the investigation that will be carried out by the ad hoc services of MPAYNETWORK. In the event of failure by amicable means, the dispute will be submitted to the competent jurisdiction of the Haitian courts.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  For anything that has not been the subject of a special clause, the parties agree to refer to the legal provisions in force of the Republic of Haiti governing the matter.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8] mt-2">
                  It is understood that the terms and conditions of other agreements and/or contracts concluded between the USER and MPAYNETWORK remain enforceable.
                </p>
              </motion.div>

              {/* Pricing Section */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[20px] font-bold text-[#1f2937] uppercase tracking-tight border-t border-gray-100 pt-6">
                  PRICING
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  The services offered and their terms of performance remain subject to the rates and conditions in force on the date of their implementation, subject to revision at any time by MPAYNETWORK. In the event of a review by the Bank, a new service pricing brochure will be posted. The client will be notified of any change in rates by consulting the Bank&apos;s website, which is available for this purpose. Thus, he undertakes to keep himself informed of these revisions.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  In the absence of a protest from the customer, by letter with acknowledgement of receipt to request the deactivation of his profile from online banking, the expiry of the period of one (1) month from the date of publication is equivalent to his approval of the new pricing.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Transfers to a third party made via MPAYNETWORKOnline are limited to a maximum amount set by MPAYNETWORK according to its internal regulations. However, this amount varies depending on the type of user and the currency used.
                </p>
              </motion.div>

              {/* Security Section */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[20px] font-bold text-[#1f2937] uppercase tracking-tight border-t border-gray-100 pt-6">
                  SECURITY
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Personal codes (username, password, OTP or security PIN) are strictly confidential. It is therefore the responsibility of the user to keep them secret and not to communicate them to anyone. If the password is forgotten or lost, the user can reset it online from the site.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Therefore, in the event of hacking or fraudulent use of the credentials, the user undertakes to inform MPAYNETWORK without delay. The Bank is not responsible for any transactions made prior to the date of receipt of this notification by MPAYNETWORK.
                </p>
              </motion.div>
            </div>
          ) : (
            /* French Version */
            <div className="space-y-12">
              <motion.div {...articleAnimation} className="border-b border-gray-100 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937] tracking-tight">
                  CONVENTION D’UTILISATION (PARTICULIER)
                </h1>
              </motion.div>

              {/* Article 1 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 1.- OBJET DE LA CONVENTION
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPay Wallet (ci-après, «MPAYNETWORK»), dans le cadre de ses attributions, met à la disposition de sa clientèle de particulier, titulaire de compte individuel ou de compte joint ouvert dans ses livres, (ci-après, «l’UTILISATEUR»), un accès par internet, (ci-après, le service MPAYNETWORKONLINE) lui permettant d’effectuer diverses transactions bancaires en ligne, notamment :
                </p>
                <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc my-4">
                  <li>Enregistrement du portefeuille mPay</li>
                  <li>Scanner le QR des magasins marchands</li>
                  <li>Transfert de fonds du portefeuille vers un autre utilisateur mPay</li>
                  <li>Paiement et recharge mobile</li>
                  <li>Envoyer de l’argent à un courriel ou à un numéro de téléphone</li>
                </ul>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La présente convention définit les modalités d’accès et de fonctionnement du service en ligne.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8] mt-2">
                  Il demeure entendu que toutes les conventions de la Banque préalablement signées par l’utilisateur continueront à s’appliquer.
                </p>
              </motion.div>

              {/* Article 2 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 2.- INSCRIPTION AU SERVICE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Toute personne physique ou morale, juridiquement capable, titulaire de compte individuel ou de compte joint ouvert dans les livres de la MPAYNETWORK, d’une carte de crédit, de débit ou prépayée, libellé en HTG ou en USD pourra bénéficier de tous les services en ligne proposés par la MPAYNETWORK au fur et à mesure de leur mise à disposition.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Au cours du processus d’inscription et avant acceptation définitive, le client aura accès à tous les comptes.
                </p>
              </motion.div>

              {/* Article 3 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 3.- MODALITES D’IDENTIFICATION
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  L’accès au service est tributaire d’un code d’accès composé d’un nom d’utilisateur et d’un mot de passe choisis par le titulaire.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Le mot de passe ayant un caractère confidentiel, l’utilisateur prendra toutes les dispositions pour assurer sa conservation et sa sécurité, en ne la communiquant pas à des tiers. Par conséquent, toute opération initiée à partir du nom d’utilisateur est présumée émaner de l’utilisateur lui-même.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  En cas de compte joint ou collectif, l’accès au service est permis à tous les co-titulaires, mandataires ou cosignataires du compte. Ces derniers étant toutefois solidairement obligés au strict respect de la convention d’utilisation de services bancaires en ligne telle qu’établie par la banque et à en respecter les termes.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  «Utilisateurs» désigne toute personne physique à qui la MPAYNETWORK donne accès aux comptes domiciliés chez elle à partir des services bancaires en ligne.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  «PIN de sécurité ou OTP» désigne un code de sécurité à utilisation unique envoyé au client pour autoriser certains types de transactions électroniques.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  «Numéro de confirmation» désigne le numéro fourni au client par la MPAYNETWORK pour lui confirmer l’exécution d’une transaction électronique. Ce numéro pourra être utilisé par le client à des fins de suivi ou de réclamation.
                </p>
              </motion.div>

              {/* Article 4 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 4.- AJOUT DE COMPTES
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Si le client est déjà adhérent, tout nouveau compte sera inclus automatiquement dans son patrimoine. Dans le cas où celui-ci ne le souhaite pas, il s’adresse au service concerné qui en tiendra compte.
                </p>
              </motion.div>

              {/* Article 5 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 5.- DROITS ET OBLIGATIONS DE MPAYNETWORKONLINE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPAYNETWORK veille à la bonne exécution des ordres reçus et à la confidentialité des informations nominatives recueillies dans le cadre du service. Elle s’engage à ne pas les divulguer, ni à les transmettre sauf en cas de gestion de ces informations ou dans le cadre d’obligations légales et réglementaires. A ce titre, elle rappelle à l’utilisateur, que sauf dans les cas où la loi le prévoit, le secret professionnel ne peut être opposé ni à la MPAYNETWORK, ni à l’autorité judiciaire agissant dans le cadre d’une procédure pénale.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Afin d’assurer une sécurité optimale à ses abonnés la MPAYNETWORK s’engage à ne jamais communiquer, y compris si la demande semble émaner du service en ligne le mot de passe par téléphone.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPAYNETWORKONLINE s’engage à mettre en œuvre et à fournir tous les efforts possibles sur le plan technique afin d’assurer le bon fonctionnement des services en ligne, ainsi que la confidentialité des informations communiquées. Elle peut également et sans préavis, bloquer la connexion en cas de manœuvre frauduleuse ou interrompre le service sans avoir à se justifier, ni être tenue pour responsable des conséquences qui en découleraient.
                </p>
              </motion.div>

              {/* Article 6 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 6.- Droits de L’UTILISATEUR
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-2">
                  L’utilisateur, dans le cadre de la présente convention, s’oblige à:
                </p>
                <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc">
                  <li>Fournir à la MPAYNETWORK tout renseignement personnel requis aux fins de son identification et de la constitution de son dossier;</li>
                  <li>Ne pas communiquer son mot de passe à des tiers;</li>
                  <li>Changer lui-même son mot de passe en cas d’accessibilité par des tiers de celui-ci ;</li>
                  <li>Assumer toute perte et/ou conséquence pécuniaire résultant de l’utilisation de son code d’accès par suite de sa négligence;</li>
                  <li>Vérifier les transactions effectuées sur son (ses) compte (s) et aviser la banque de toute erreur y relative;</li>
                  <li>Ne pas utiliser l’infrastructure et le système mis à sa disposition par la MPAYNETWORK de manière contraire à la présente convention, de manière frauduleuse ou illégale et /ou de façon préjudiciable à la sécurité et à l’efficacité du Service;</li>
                  <li>N’effectuer aucune transaction illicite en utilisant ce service;</li>
                  <li>L’entreprise et ses utilisateurs désignés s’obligent conjointement et solidairement à ne pas utiliser les services en violation des instructions passées par la MPAYNETWORK, de manière frauduleuse ou illégales et/ou d’une façon préjudiciable à la sécurité et à l’efficacité dudit service. Elle s’oblige en outre, à n’effectuer, à partir de ce site, aucune transaction illicite pouvant nuire au site de la MPAYNETWORK et/ou aux tiers.</li>
                </ul>
              </motion.div>

              {/* Article 7 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 7.- LIMITATIONS DE RESPONSABILITES
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPAYNETWORKONLINE utilise des outils de sécurité très performants, elle ne peut garantir toutefois la sécurité totale des données transmises sur les services en ligne;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Elle ne saurait être tenue pour responsable lorsque l’inexécution de ses obligations résulte d’éléments qui échappent à son contrôle;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Sa responsabilité ne pourra non plus être engagée en cas d’accès frauduleux des informations du client au moyen de messages de tiers usurpant l’identité de la banque;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPAYNETWORKOnline ne garantit pas la sécurité de fonctionnement des réseaux de télécom. Elle ne saurait, de ce fait, être tenue pour responsable en ce qui concerne le transport des informations ou des conséquences résultant d’un défaut de sécurité ou de fiabilité du terminal de connexion utilisé par le client;
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPAYNETWORKOnline ne saurait non plus assumer les conséquences qui résulteraient d’une erreur de transmission ou de manipulation de la part du client.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  En cas de différence entre les informations figurant sur le site et celles enregistrées sur le relevé bancaire, les parties conviennent expressément que les dernières feront foi.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Les transactions effectuées par la MPAYNETWORKOnline obtiendront automatiquement un numéro de référence interne. Chaque transaction effectuée sera conservée par la Banque sur support électronique. En cas de besoin, l’enregistrement servira de preuve.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Les transactions seront exécutées sous réserves de solde disponible du compte et des autres engagements de l’Utilisateur envers la MPAYNETWORK. Toutes transactions effectuées via MPAYNETWORKOnline ou MaMPAYNETWORK seront enregistrées suivant les normes d’usages bancaires et financiers d’imputation.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Toute transaction initiée en ligne nécessitant un suivi en succursale telles que: attestations bancaires, remise de chèque de direction, livraison de chéquier etc… sera disponible à la succursale du choix du client dans un délai d’un (1) jour ouvrable (en semaine).
                </p>
              </motion.div>

              {/* Article 8 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 8.- UTILISATION DU SERVICE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  L’adhésion aux services en ligne de la MPAYNETWORK permet à l’utilisateur de consulter l’ensemble des comptes rattachés à son patrimoine.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La MPAYNETWORKOnline offre à l’utilisateur qui l’accepte, un service lui permettant d’accéder à son patrimoine à distance et d’y effectuer à travers internet les diverses transactions bancaires énumérées à l’article 1.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  L’utilisateur adhérant au service MPAYNETWORKOnline reconnaît expressément qu’il a pris connaissance de toutes les informations sur le contenu du service, ses caractéristiques, sa disponibilité et ses modalités de fonctionnement.
                </p>
              </motion.div>

              {/* Article 9 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 9- DUREE ET RESILIATION DU CONTRAT
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  L’adhésion au Service en ligne est conclu pour une période entière d’une (1) année renouvelable par tacite reconduction, sauf autrement spécifié par l’une des deux parties prenantes. Elle entrera en vigueur à compter de la date de la confirmation de l’acceptation par l’Administration de la MPAYNETWORKOnline de l’adhésion de l’Entreprise.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  L’utilisateur ne désirant pas renouveler la présente convention en informera l’Administration de la MPAYNETWORKOnline par lettre avec accusé de réception au moins un (1) mois avant sa date d’expiration.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  La dénonciation ou résiliation du contrat d’adhésion entraine l’interruption automatique du service MPAYNETWORKOnline. Dans ce cas, le client ne disposera alors plus de la possibilité de consulter son patrimoine ou d’effectuer des transactions en ligne.
                </p>
              </motion.div>

              {/* Article 10 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 10- MODIFICATION DU SERVICE
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Compte tenu notamment des évolutions technologiques et améliorations possibles du service, la MPAYNETWORKOnline se réserve la possibilité de changer à tout moment le champ des services offerts en ligne et d’apporter des modifications adéquates aux conditions de la présente convention. Le client en sera avisé avant la date d’entrée en vigueur.
                </p>
              </motion.div>

              {/* Article 11 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 11: RECLAMATION
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Le fait pour la MPAYNETWORK de s’abstenir de réclamer ou de réclamer tardivement l’application de l’une des clauses contenues dans la présente convention, n’implique ni renonciation à ses droits ni acquiescement.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Toute réclamation devra être alors effectuée dans les délais, par lettre recommandée avec accusé de réception adressée à l’Administration de MPAYNETWORKOnline.
                </p>
              </motion.div>

              {/* Article 12 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 12 : DE LA RESILIATION
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-2">
                  La MPAYNETWORK pourra résilier la présente convention, dans les cas suivants :
                </p>
                <ul className="space-y-2 text-[14.5px] text-gray-500 leading-[1.8] pl-5 list-disc">
                  <li>Décès de l’UTILISATEUR ;</li>
                  <li>Utilisation frauduleuse du Service par l’UTILISATEUR ;</li>
                  <li>Manquement à ses obligations par l’UTILISATEUR, définies par la présente convention ;</li>
                  <li>Sur demande formelle du client ;</li>
                  <li>Dans tout autre cas jugé nécessaire par la Banque.</li>
                </ul>
              </motion.div>

              {/* Article 13 FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[18px] font-bold text-[#1f2937]">
                  Article 13: DES LITIGES ET DISPOSITIONS GENERALES
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Les parties s’engagent à exécuter de bonne foi les clauses du présent contrat. En cas de contestation relative à une transaction bancaire réalisée à partir du Service, l’UTILISATEUR accepte, d’ores et déjà, de contacter un représentant de la MPAYNETWORK afin de résoudre à l’amiable la contestation. A cette fin, l’UTILISATEUR s’oblige à coopérer avec la MPAYNETWORK en lui fournissant toute information, document, donnée pouvant faire avancer l’investigation qui sera faite par les services ad hoc de la MPAYNETWORK. En cas d’échec par voie amiable, la contestation sera soumise à la juridiction compétente des tribunaux haïtiens.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Pour tout ce qui n’aura pas fait l’objet d’une clause spéciale, les parties conviennent de se référer aux dispositions légales, en vigueur, de la République d&apos;Haïti régissant la matière.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8] mt-2">
                  Il demeure entendu que les clauses et conditions des autres conventions et/ou contrats conclus entre l’UTILISATEUR et la MPAYNETWORK demeurent opposables.
                </p>
              </motion.div>

              {/* Tarifications Section FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[20px] font-bold text-[#1f2937] uppercase tracking-tight border-t border-gray-100 pt-6">
                  TARIFICATIONS
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Les services offerts et leurs modalités d’exécution restent soumis aux tarifs et conditions en vigueur à leur date de réalisation, sujets à révision à n’importe quel moment par la MPAYNETWORK. En cas de révision par la Banque, une nouvelle plaquette de tarification de service sera affichée. Le client sera avisé de toute modification de tarifs en consultant le site de la Banque, proposé à cet effet. Ainsi, il s’engage à se tenir informer de ces révisions.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  À défaut de protestation du client, par lettre avec accusé de réception pour demander la désactivation de son profil aux services bancaires en ligne, l’expiration du délai d’un (1) mois de la date de parution vaut, de sa part, approbation de la nouvelle tarification.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Les virements au bénéfice d’un tiers effectués via MPAYNETWORKOnline sont limités à un montant maximal fixé par la MPAYNETWORK en fonction de ses règlements internes. Toutefois, ce dit montant varie selon le type d’utilisateur et la monnaie utilisée.
                </p>
              </motion.div>

              {/* Sécurité Section FR */}
              <motion.div {...articleAnimation} className="space-y-3">
                <h2 className="text-[20px] font-bold text-[#1f2937] uppercase tracking-tight border-t border-gray-100 pt-6">
                  SÉCURITÉ
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Les codes personnels (nom d’utilisateur, mot de passe, OTP ou PIN de sécurité) sont strictement confidentiels. Il est donc de la responsabilité de l’utilisateur de les tenir secrets et de ne les communiquer à quiconque. En cas d’oubli ou de perte du mot de passe, l’utilisateur peut le réinitialiser en ligne à partir du site.
                </p>
                <p className="text-gray-500 text-[15px] leading-[1.8]">
                  Par conséquent, en cas de piratage ou d’utilisation frauduleuse des identifiants, l’utilisateur s’engage à informer la MPAYNETWORK sans délai. La Banque n’est nullement responsable d’aucune transaction effectuée avant la date de réception de cette notification par la MPAYNETWORK.
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default TermsAndConditions;
