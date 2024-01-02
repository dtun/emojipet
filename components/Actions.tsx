import { ActionButton } from './ActionButton';

function Actions() {
  return (
    <ActionButton.Wrapper>
      <ActionButton.Feed />
      <ActionButton.Play />
      <ActionButton.Water />
    </ActionButton.Wrapper>
  );
}

export { Actions };
