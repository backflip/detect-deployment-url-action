const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log({ context: github.context });

  const regex = core.getInput("regex");
  const { payload } = github.context;
  const comment = payload.comment ? payload.comment.body : null;

  console.log({ comment });

  if (comment) {
    const url = comment.match(new RegExp(regex));

    console.log({ url });

    if (url) {
      core.setOutput("url", url[0]);
    }
  }
} catch (error) {
  core.setFailed(error.message);
}
