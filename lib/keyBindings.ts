import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
const { hasCommandModifier } = KeyBindingUtil;

type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;

const bindings = (e: SyntheticKeyboardEvent) => {
	if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
		return "myeditor-save";
	}
	return getDefaultKeyBinding(e);
};

export default bindings;
