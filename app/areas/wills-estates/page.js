import AreaLayout, { H2, P, UL, LI, Note, Rule } from '@/components/AreaLayout'
import { ScrollText } from 'lucide-react'

export const metadata = {
  title: 'Wills & Deceased Estates | Meridian Attorneys',
  description: 'Drafting valid South African wills and guiding families through the full administration of deceased estates — efficiently, correctly, and compassionately.',
}

export default function Page() {
  return (
    <AreaLayout icon={"ScrollText"} title="Wills & Deceased Estates">

      <P lead>
        A valid will is one of the most important documents you will ever sign. It determines who
        inherits your assets, who raises your minor children, and whether your estate is wound up
        efficiently or left in the hands of the Intestate Succession Act. When someone close to
        you passes away, we guide the family through the administration of the estate — practically,
        promptly, and with care.
      </P>

      <H2>Why Your Will Matters</H2>
      <P>
        Dying without a valid will — called dying intestate — means the Intestate Succession
        Act 81 of 1987 determines how your estate is distributed. The Act follows a fixed formula
        that may not reflect your wishes. A surviving spouse and children will share the estate
        in prescribed proportions; unmarried partners receive nothing at all. A valid will gives
        you control over who inherits, in what proportions, and under what conditions.
      </P>
      <P>
        Wills in South Africa must meet strict formal requirements under the Wills Act 7 of 1953.
        A will that is improperly signed, witnessed, or dated can be declared invalid — leaving
        your estate to be distributed as if you had no will at all. We draft wills that are
        carefully worded, correctly executed, and properly stored.
      </P>

      <H2>Winding Up a Deceased Estate</H2>
      <P>
        When a person dies, their estate must be formally administered under the
        Administration of Estates Act 66 of 1965. The process begins with reporting the death
        to the Master of the High Court and appointing an executor. The executor then
        inventories all assets, advertises for creditors, pays all debts and taxes, and
        ultimately distributes the balance to the heirs in accordance with the will or
        the Intestate Succession Act.
      </P>
      <P>
        A straightforward estate typically takes between six and twelve months. Complex estates
        — involving immovable property, business interests, offshore assets, or disputes among
        heirs — can take considerably longer. Appointing an experienced attorney as executor,
        or assisting an appointed executor with the legal requirements, significantly reduces
        delays and errors.
      </P>

      <Note>
        The executor's fee is regulated by the Administration of Estates Act and is calculated
        as a percentage of the gross value of the estate. Heirs who are appointed as executors
        may appoint an attorney to act on their behalf (agent executor) — keeping the estate
        process in competent hands while still respecting the testator's choice.
      </Note>

      <Rule />
      <H2>What We Handle</H2>
      <UL>
        <LI>Drafting of wills, codicils, and living wills tailored to your specific circumstances</LI>
        <LI>Advice on testamentary trusts, special bequests, and minor beneficiary provisions</LI>
        <LI>Reporting deceased estates to the Master of the High Court</LI>
        <LI>Acting as executor or as agent for a family member appointed as executor</LI>
        <LI>Advertising for creditors and managing estate liabilities</LI>
        <LI>Preparation of liquidation and distribution accounts</LI>
        <LI>Transfer of immovable property to heirs and beneficiaries</LI>
        <LI>Disputes among heirs, challenges to the validity of wills, and intestate distribution queries</LI>
      </UL>

    </AreaLayout>
  )
}