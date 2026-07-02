import AreaLayout, { H2, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { Handshake } from 'lucide-react'

export const metadata = {
  title: 'Third Party Claims | Meridian Attorneys',
  description: 'Claims against third-party insurers for loss or injury caused by another\'s negligence. We build your case and negotiate the best possible settlement on your behalf.',
}

export default function Page() {
  return (
    <AreaLayout icon={"Handshake"} title="Third Party Claims">

      <P lead>
        A third party claim arises when you suffer loss or injury as a result of someone else's
        negligence, and that person is insured. Rather than pursuing the negligent party directly,
        you claim against their insurer. These claims require careful evidence gathering, a clear
        understanding of how insurers assess and settle claims, and — in contested matters —
        effective litigation. We represent claimants at every stage of this process.
      </P>

      <H2>When Does a Third Party Claim Arise?</H2>
      <P>
        Third party claims most commonly arise where the at-fault party has liability insurance
        that covers the loss or injury they caused. Common scenarios include:
      </P>
      <UL>
        <LI>Injuries sustained on another person's insured property — a slip and fall, unsafe premises, or defective equipment</LI>
        <LI>Damage or injury caused by a contractor or service provider covered by public liability insurance</LI>
        <LI>Product liability claims where a defective product causes injury and the manufacturer is insured</LI>
        <LI>Medical negligence claims against healthcare practitioners and institutions</LI>
        <LI>Professional indemnity claims against advisors whose negligence caused financial loss</LI>
      </UL>

      <H2>Establishing the Claim</H2>
      <P>
        To succeed in a third party claim, you must establish three things: that the insured party
        owed you a duty of care; that they breached that duty through negligent conduct; and
        that their breach caused your loss or injury. The insurer will typically investigate
        the incident, assess liability, and either accept the claim, dispute it, or make a
        settlement offer.
      </P>
      <P>
        Insurers are experienced at managing claims costs. Settlement offers made at an early
        stage — before a full assessment of your damages has been completed — are frequently
        lower than what you are entitled to. We advise you not to accept any settlement without
        first obtaining a comprehensive assessment of your losses, including future medical costs
        and loss of income where applicable.
      </P>

      <H2>Time Limits</H2>
      <P>
        Prescription generally runs for three years from the date you became aware of both
        the identity of the responsible party and the facts giving rise to your claim. Some
        insurance policies also contain notice requirements — a condition that the insurer
        must be notified of a claim within a specified period of the incident. Failure to
        comply can result in the insurer declining to honour the policy. We review these
        requirements as a first step in every matter.
      </P>

      <Note>
        Third party claims that involve road accidents caused by identifiable vehicles are
        governed by the Road Accident Fund — which operates under its own statutory framework
        and time limits. See our Road Accident Fund Claims practice area for detail on those matters.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Assessment of liability and advice on the strength of your third party claim</LI>
        <LI>Gathering and preserving evidence — incident reports, photographs, witness statements</LI>
        <LI>Coordination of medical, engineering, and expert reports to quantify your damages</LI>
        <LI>Written notification to the insurer and management of the claims process</LI>
        <LI>Negotiation with insurers and their legal teams toward fair settlement</LI>
        <LI>Issuing summons and High Court litigation where the insurer disputes liability or quantum</LI>
        <LI>Product liability and medical negligence claims</LI>
        <LI>Professional indemnity claims against attorneys, accountants, and financial advisors</LI>
      </UL>

    </AreaLayout>
  )
}