import AreaLayout, { H2, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { Users } from 'lucide-react'

export const metadata = {
  title: 'Family Law | Meridian Attorneys',
  description: 'Protection orders, child maintenance, parenting plans, and guardianship matters — always with your family\'s best interests as the guiding principle.',
}

export default function Page() {
  return (
    <AreaLayout icon={"Users"} title="Family Law">

      <P lead>
        Family law matters are among the most personal and emotionally charged situations
        a person can face. Whether you need to protect yourself or your children from harm,
        enforce a maintenance obligation, or formalise parenting arrangements after separation,
        we handle each matter with sensitivity, clarity, and an unwavering focus on what is
        genuinely in your family's best interests.
      </P>

      <H2>Protection Orders</H2>
      <P>
        The Domestic Violence Act 116 of 1998 provides for the urgent issue of a protection
        order against a person who has subjected you to domestic violence — including physical
        abuse, emotional abuse, economic abuse, intimidation, harassment, and stalking.
        An interim protection order can be obtained from any Magistrate Court without the
        respondent being present, and served on them by the sheriff. A return date is then set
        for a final order hearing.
      </P>
      <P>
        We assist applicants at every stage — preparing a comprehensive founding affidavit,
        attending court with you, and ensuring the order contains all necessary provisions
        to protect you and your children. Breaching a protection order is a criminal offence.
      </P>

      <H2>Child Maintenance</H2>
      <P>
        Both parents are legally obligated to contribute to their children's maintenance in
        proportion to their respective means, regardless of the state of their relationship.
        This obligation continues until each child turns 18 or becomes self-supporting.
        If a parent fails to pay maintenance, you can apply to the Maintenance Court for an
        order. Non-compliance with a maintenance order is a criminal offence under the
        Maintenance Act 99 of 1998.
      </P>
      <P>
        We assist in calculating a fair maintenance contribution based on the parties' income
        and the child's reasonable needs, preparing Maintenance Court applications,
        and enforcing existing orders that are not being met — including through attachment
        of the defaulting parent's salary.
      </P>

      <H2>Parenting Plans</H2>
      <P>
        The Children's Act 38 of 2005 encourages parents who separate or divorce to put in
        place a formal parenting plan that sets out the practical arrangements for their
        children. A parenting plan can cover primary residence, contact schedules, schooling,
        medical decisions, travel permissions, and communication arrangements.
      </P>
      <P>
        When incorporated into a court order, a parenting plan becomes legally binding and
        enforceable. We assist parents in negotiating workable, child-focused plans — and
        where agreement cannot be reached, we represent you in contested parental rights
        proceedings before the High Court or Family Court.
      </P>

      <Note>
        If you are in immediate danger, please contact the SAPS or a local shelter first.
        We can assist with the legal protection order process as a matter of urgency —
        contact our office and we will prioritise your matter.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Urgent interim and final protection orders under the Domestic Violence Act</LI>
        <LI>Child maintenance applications, variation of maintenance orders, and enforcement</LI>
        <LI>Parenting plans — drafting, negotiation, and incorporation into court orders</LI>
        <LI>Contested primary residence and contact right disputes</LI>
        <LI>Guardianship — applications, disputes, and the appointment of alternative guardians</LI>
        <LI>Relocation applications where a parent wishes to move with the children</LI>
        <LI>Spousal maintenance claims and variation applications after divorce</LI>
        <LI>Adoption and the legal termination of parental responsibilities and rights</LI>
      </UL>

    </AreaLayout>
  )
}