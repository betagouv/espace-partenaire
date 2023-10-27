
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
    className?: string;
}

export function Divider(props: Props) {

    const { className } = props;

    const { css, cx } = useStyles();

    return (
        <div
            className={cx(
                css({
                    borderBottom: `1px solid ${fr.colors.decisions.border.default.grey.default}`
                }),
                className
            )}
        />
    );

}