import AreaLayout, { H2, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { Scale } from 'lucide-react'

export const metadata = {
  title: 'Commercial & General Litigation | Meridian Attorneys',
  description: 'Breach of contract, business disputes, shareholder conflicts, and professional negligence claims — Magistrate Court, High Court, and arbitration.',
}

export default function Page() {
  return (
    <AreaLayout icon={"Scale"} title="Commercial & General Litigation">

      <P lead>
        Commercial disputes are an unavoidable reality of business life. Contracts are breached,
        partners disagree, debtors default, and professional advisors sometimes fall short of
        the standard they owe. When these situations arise, you need a legal team that understands
        both the law and the commercial context — and that will pursue the best possible outcome
        without unnecessary delay or expense. That is our approach at Meridian.
      </P>

      <H2>What Commercial Litigation Covers</H2>
      <P>
        Commercial litigation encompasses any dispute arising from a business relationship or
        commercial transaction. This is a broad category, but the disputes we most frequently
        handle include:
      </P>
      <UL>
        <LI>Breach of contract — enforcing agreements that have not been honoured, or defending claims of breach</LI>
        <LI>Shareholder and partnership disputes — deadlocks, oppressive conduct, and claims for the winding up of close corporations and companies</LI>
        <LI>Restraint of trade disputes — enforcing or challenging post-employment and post-sale restrictions</LI>
        <LI>Commercial lease disputes — rental arrears, unlawful cancellation, deposit retention, and eviction</LI>
        <LI>Insurance disputes — claims declined or underpaid by commercial insurers</LI>
        <LI>Franchise disputes — breach of the franchise agreement, unlawful termination, and post-termination obligations</LI>
        <LI>Professional negligence — claims against attorneys, accountants, engineers, and financial advisors</LI>
      </UL>

      <H2>Our Approach: Resolution First, Litigation When Necessary</H2>
      <P>
        Litigation is expensive, time-consuming, and uncertain. Our starting point in every
        commercial dispute is to assess whether a negotiated resolution is achievable —
        and to pursue it vigorously if it is. Many commercial disputes that end up in lengthy
        court proceedings could have been resolved at an earlier stage had the parties engaged
        constructively, with the right legal support, at the outset.
      </P>
      <P>
        Where litigation is unavoidable, we proceed with a clear strategy and a realistic
        assessment of what can be achieved. We do not pursue claims that are unlikely to
        succeed, and we advise clients honestly on the costs and risks of litigation before
        committing to it.
      </P>

      <H2>Alternative Dispute Resolution</H2>
      <P>
        For many commercial disputes, arbitration or mediation is faster, less expensive,
        and more private than High Court litigation. We represent clients in commercial
        arbitrations governed by the Arbitration Act 42 of 1965 and in ad hoc mediation
        processes. Arbitration awards are legally binding and enforceable as court orders.
        Where a contract contains an arbitration or mediation clause, we advise on its
        scope and effect before any proceedings are initiated.
      </P>

      <Note>
        The High Court is not always the right forum — even for large claims. We assess
        each matter on its facts and advise on the most appropriate and cost-effective
        forum: Magistrate Court, High Court, specialised tribunal, arbitration, or mediation.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Breach of contract — enforcement and defence in Magistrate Court and High Court</LI>
        <LI>Urgent interdicts to prevent imminent harm — restraining a resigning employee, freezing assets, or stopping a breach</LI>
        <LI>Shareholder and directors' disputes — derivative actions, winding-up applications, and buyout orders</LI>
        <LI>Restraint of trade enforcement and challenges</LI>
        <LI>Commercial lease enforcement — evictions, damages, and deposit recovery</LI>
        <LI>Insurance policy disputes and insurer repudiation challenges</LI>
        <LI>Arbitration representation — preparation, hearings, and enforcement of awards</LI>
        <LI>Appeals against Magistrate Court and High Court judgments</LI>
      </UL>

    </AreaLayout>
  )
}