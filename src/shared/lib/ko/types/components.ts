export interface KnockoutComponentMeta {
  name: string;
  component: KnockoutComponentTypes.Config<unknown>;
  lazy?:
    | (() => Promise<{
        default?: KnockoutComponentTypes.Config<unknown> | undefined;
      }>)
    | undefined;
}
