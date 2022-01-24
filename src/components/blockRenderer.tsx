import { ContentBlock } from "draft-js";

const blockRenderFn = (block: ContentBlock) => {
	switch (block.getType()) {
		case "header-one": {
			// const id = this.fetchIdFromBlock(block); // your function which determinate the id by analyze the content state, also check possibilities for: cache/pre-calculation, when it gives benefits
			const H1 = (props) => <h1 {...props}></h1>;
			return {
				component: H1,
				editable: true,
			};
		}
	}
};

export default blockRenderFn;
