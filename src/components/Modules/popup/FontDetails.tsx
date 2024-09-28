import Heading from '~/UI/Heading'

export function FontDetails({ fonts }: { fonts: string[] }) {
  return (
    <section data-section="fonts" className="space-y-2">
      <Heading text="Fonts" />
      <div>{fonts.join(', ')}</div>
    </section>
  )
}
