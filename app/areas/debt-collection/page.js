import AreaLayout, { H2, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { Receipt } from 'lucide-react'

export const metadata = {
  title: 'Debt Collection | Makwarela A.S Attorneys',
  description: 'We recover what is owed to you — demand letters, summons, judgment, and execution — through the appropriate court, swiftly and cost-effectively.',
}

export default function Page() {
  return (
    <AreaLayout icon={"Receipt"} title="Debt Collection">

      <P lead>
        Outstanding debt damages cash flow, strains relationships, and — left unaddressed —
        can threaten the viability of a business. South African law provides effective mechanisms
        for recovering what is legitimately owed to you. We handle the entire process, from the
        first demand letter to enforcement of judgment, so you can focus on your business while
        we focus on your debtors.
      </P>

      <H2>The Debt Recovery Process</H2>
      <P>
        Most debt recovery matters follow a predictable path: a formal letter of demand, followed
        by summons if no response is received, then judgment, and finally execution against the
        debtor's assets or salary. The forum — Magistrate Court or High Court — depends on the
        amount owed and the nature of the debt.
      </P>
      <P>
        The Magistrate Court has jurisdiction over claims up to R400,000. The High Court handles
        larger claims or matters involving complex legal issues. We advise you on the most
        appropriate and cost-effective forum for your specific claim.
      </P>

      <H2>After Judgment: Enforcing What You Are Owed</H2>
      <P>
        Obtaining judgment is only half the process. If the debtor does not pay voluntarily,
        we apply for a writ of execution against their movable or immovable property, or an
        emoluments attachment order (garnishee order) directing their employer to deduct the
        debt from their salary. Where a debtor is a company, we may apply for provisional
        liquidation as leverage or as a last resort.
      </P>

      <H2>Prescription: Act Before Your Claim Expires</H2>
      <P>
        Most debts prescribe — become legally unenforceable — after three years if no
        acknowledgement of the debt or legal proceedings have interrupted the prescription period.
        Prescription does not apply automatically, but a debtor who raises it as a defence can
        avoid liability entirely. If you are owed money, acting promptly is essential.
      </P>

      <Note>
        Section 129 of the National Credit Act requires that credit providers send a specific
        notice before commencing legal proceedings against a consumer debtor. Failure to comply
        with this requirement can invalidate the entire proceedings. We ensure all statutory
        requirements are met before issuing summons.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Formal letters of demand — designed to prompt payment and preserve your legal position</LI>
        <LI>Summons and default judgment applications in Magistrate Court and High Court</LI>
        <LI>Defended debt matters where debtors dispute the claim</LI>
        <LI>Writs of execution against movable and immovable property</LI>
        <LI>Emoluments attachment orders (garnishee orders) against salaries</LI>
        <LI>Section 65 financial enquiries to trace the debtor's assets and means</LI>
        <LI>Bulk debt collection portfolios for businesses and financial institutions</LI>
        <LI>Provisional and final liquidation applications against corporate debtors</LI>
      </UL>

    </AreaLayout>
  )
}