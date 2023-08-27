export type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;

export type PropOf<T, K> = K extends keyof PropsOf<T> ? NonNullable<PropsOf<T>[K]> : never;

export type RefOf<C> = C extends React.ForwardRefExoticComponent<infer FC>
  ? FC extends { ref?: React.Ref<infer R> }
    ? R
    : never
  : never;
