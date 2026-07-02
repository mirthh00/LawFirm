import AreaLayout, { H2, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { CreditCard } from 'lucide-react'

export const metadata = {
  title: 'Debt Review | Meridian Attorneys',
  description: 'Formal debt rehabilitation under the National Credit Act. We protect your assets, negotiate with creditors, and restructure your repayments.',
}

export default function Page() {
  return (
    <AreaLayout icon={"CreditCard"} title="Debt Review">

      <P lead>
        Debt review — also called debt counselling — is a formal legal process introduced by the National
        Credit Act 34 of 2005. It is designed for South Africans who are over-indebted: where monthly
        income is no longer enough to meet all financial obligations. The process restructures what you
        owe into a single, reduced monthly payment while legally preventing creditors from acting
        against you or your assets.
      </P>

      <H2>Who Qualifies?</H2>
      <P>
        You may apply if you are a natural person with one or more credit agreements under the NCA and
        your monthly debt repayments exceed what your income allows after basic living expenses. A
        registered debt counsellor formally assesses your position before the process begins. Debt
        review is not sequestration — it means you need a sustainable repayment plan, not that
        you are insolvent.
      </P>

      <H2>How the Process Protects You</H2>
      <P>
        From the date your application is submitted, creditors are legally prohibited from issuing
        summons or repossessing your assets — provided you comply with the restructured plan. Your
        debt counsellor negotiates reduced instalments and interest rates directly with each creditor.
        Once agreed, the restructured plan is made an order of court under section 87 of the NCA,
        binding all parties. You make one monthly payment to a Payment Distribution Agency, which
        distributes it to your creditors on your behalf.
      </P>

      <Note>
        Debt review typically takes three to five years to complete. Once all debts are settled you
        receive a clearance certificate, your name is removed from the debt review register, and
        your credit profile is restored.
      </Note>

      <H2>Exiting Debt Review</H2>
      <P>
        The process is not permanent. You exit once your restructured debts are fully settled and
        the clearance certificate is issued. If your financial circumstances improve materially —
        through a bonus or inheritance — you may be able to settle earlier or apply to court to be
        declared no longer over-indebted.
      </P>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Financial assessment and formal over-indebtedness determination</LI>
        <LI>Notification of all credit providers and credit bureaus on your behalf</LI>
        <LI>Negotiation of reduced interest rates and restructured instalments with creditors</LI>
        <LI>Preparation and filing of the section 87 court application</LI>
        <LI>Defence against any creditor that attempts legal action during the protected period</LI>
        <LI>Ongoing monitoring throughout the process and clearance certificate on completion</LI>
      </UL>

    </AreaLayout>
  )
}