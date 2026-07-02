import AreaLayout, { H2, H3, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { HeartCrack } from 'lucide-react'

export const metadata = {
  title: 'Divorce Matters | Meridian Attorneys',
  description: 'Contested and uncontested divorces in South Africa — property division, parenting plans, spousal maintenance, and children\'s rights handled with clarity and sensitivity.',
}

export default function Page() {
  return (
    <AreaLayout icon={"HeartCrack"} title="Divorce Matters">

      <P lead>
        Divorce is one of the most significant legal events in a person's life. South African law
        provides a structured framework to dissolve a marriage fairly — but the process, the
        outcomes, and the protections available to you depend heavily on how you navigate it.
        We handle both uncontested and contested divorces with care, transparency, and a focus
        on achieving the best outcome for you and your children.
      </P>

      <H2>Uncontested vs. Contested Divorce</H2>
      <P>
        An <strong>uncontested divorce</strong> is one where both parties have agreed on all
        issues — division of assets, spousal maintenance, and all arrangements for children —
        before approaching the court. These matters can often be finalised in a single court
        appearance, at significantly lower cost and in far less time than a contested matter.
      </P>
      <P>
        A <strong>contested divorce</strong> arises where the parties disagree on one or more
        issues. The court must then adjudicate, which involves the exchange of pleadings,
        discovery, and potentially a full trial. Contested matters can take years and incur
        substantial legal costs. Early, skilled representation shapes both the trajectory
        and the ultimate result.
      </P>

      <H2>Marital Regimes and Property</H2>
      <P>
        Your marital regime — in community of property, out of community with accrual, or out
        of community without accrual — determines how assets and debts are divided on divorce.
        If you do not have an antenuptial contract, you are married in community of property
        and the joint estate is divided equally. If you do have an antenuptial contract, the
        terms of that contract govern the division. We advise you on exactly where you stand
        and what you are entitled to before any decisions are made.
      </P>

      <H2>Children</H2>
      <P>
        Where minor children are involved, the court's paramount consideration is always
        their best interests. We assist parents in reaching workable, child-centred parenting
        plans that address primary residence, contact schedules, schooling decisions, and
        child maintenance. Where agreement cannot be reached, we represent you in contested
        parental rights proceedings.
      </P>

      <Note>
        Never vacate the family home, sign any agreement, or separate joint finances without
        first taking legal advice. Decisions made in the early stages of a divorce can have
        lasting consequences on your financial and parenting rights.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Uncontested divorces — preparation of all papers and court attendance</LI>
        <LI>Contested divorces — full representation from summons to decree</LI>
        <LI>Division of assets, pension interests, and business interests</LI>
        <LI>Accrual calculations and forensic tracing of estate growth</LI>
        <LI>Parenting plans, primary residence, and contact right disputes</LI>
        <LI>Spousal and child maintenance claims and enforcement</LI>
        <LI>Divorce mediation as an alternative to contested litigation</LI>
        <LI>Urgent interdicts where assets are being dissipated or children are at risk</LI>
      </UL>

    </AreaLayout>
  )
}