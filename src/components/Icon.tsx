export function Icon({ name }: { name: string }) {
  return <i className={`bi bi-${name}`} aria-hidden="true" />;
}
