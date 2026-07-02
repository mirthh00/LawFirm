import AreaLayout, { H2, H3, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { Car } from 'lucide-react'

export const metadata = {
  title: 'Road Accident Fund Claims | Makwarela A.S Attorneys',
  description: 'RAF claims for drivers, passengers, and pedestrians injured through another\'s negligence. General damages, loss of earnings, and medical costs — we build your claim from start to settlement.',
}

export default function Page() {
  return (
    <AreaLayout icon={"Car"} title="Road Accident Fund Claims">

      <P lead>
        The Road Accident Fund is a state-funded insurer that compensates South Africans injured in
        motor vehicle accidents caused by the negligent driving of another person. If you were hurt
        as a driver, passenger, pedestrian, or cyclist — and the accident was not solely your fault
        — you may have a valid RAF claim. We guide claimants through every stage of this process.
      </P>

      <H2>Who Can Claim?</H2>
      <P>
        Any person injured in a road accident caused by another driver's negligence may lodge a
        claim. This includes passengers in the at-fault vehicle, pedestrians, cyclists, and
        drivers who were partially but not solely responsible. Dependants of a person killed in
        a road accident may also claim for loss of support.
      </P>
      <P>
        Since the RAF Amendment Act of 2008, claims are divided into two categories: claims for
        loss of income and future medical expenses (which remain largely unrestricted), and claims
        for general damages, which require the injury to meet a statutory "serious injury" threshold
        assessed by an accredited medical professional.
      </P>

      <H2>What You Can Claim For</H2>
      <UL>
        <LI>General damages for pain, suffering, and loss of amenities of life — subject to serious injury assessment</LI>
        <LI>Past and future loss of earnings or earning capacity where the injury affects your ability to work</LI>
        <LI>Past and future medical and hospital expenses arising directly from the accident</LI>
        <LI>Loss of support for dependants of a deceased breadwinner</LI>
      </UL>

      <H2>Time Limits</H2>
      <P>
        The prescription period for RAF claims is three years from the date of the accident.
        Where a minor was injured, the three-year period only begins on the child's eighteenth
        birthday. Acting well before this deadline is essential — building a proper claim
        requires medical reports, actuarial calculations, and often expert evidence, all of
        which take time to assemble.
      </P>

      <Note>
        The RAF is a sophisticated defendant with in-house legal teams. Unrepresented claimants
        routinely receive significantly less than they are entitled to, or have valid claims
        rejected on technical grounds. Legal representation makes a measurable difference
        to the outcome.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Assessment of your claim and advice on whether it meets the serious injury threshold</LI>
        <LI>Coordination of medical examinations, specialist reports, and actuarial loss-of-earnings calculations</LI>
        <LI>Preparation and lodgement of the claim with the RAF</LI>
        <LI>Negotiation with the RAF and its legal representatives toward a fair settlement</LI>
        <LI>High Court litigation where the RAF disputes liability or the quantum of damages</LI>
        <LI>Claims involving unidentified (hit-and-run) drivers and uninsured vehicle owners</LI>
      </UL>

    </AreaLayout>
  )
}