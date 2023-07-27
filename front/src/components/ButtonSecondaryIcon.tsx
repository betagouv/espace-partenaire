import { FrIconClassName } from '@codegouvfr/react-dsfr';
import { Button as MuiButton } from '@codegouvfr/react-dsfr/Button';

function Button(props: {
  iconId: FrIconClassName | never;
  label: string;
}) {
  return (
    <MuiButton
      iconId={props.iconId}
      onClick={function noRefCheck() {}}
      priority="secondary"
    >
      {props.label}
    </MuiButton>
  );
}

export default Button;
