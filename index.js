const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log({ context: github.context });

  const regex = core.getInput("regex");
  const comment = github.context.payload.comment?.body;

  console.log({ comment });

  if (comment) {
    const url = comment.match(new RegExp(regex))?.[0];

    console.log({ url });

    if (url) {
      core.setOutput("url", url);
    }
  }
} catch (error) {
  core.setFailed(error.message);
}
