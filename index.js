const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log({ context: github.context });

  const regex = core.getInput("regex");
  const ignoreRegex = core.getInput("ignoreRegex");

  console.log({ regex, ignoreRegex });

  const { payload } = github.context;
  const comment = payload.comment ? payload.comment.body : null;

  console.log({ comment });

  if (comment) {
    const ignore = ignoreRegex && !!comment.match(new RegExp(ignoreRegex));

    if (ignore) {
      console.log(`Ignoring comment because "ignoreRegex" matched`);
    } else {
      console.log({ parsedRegex: new RegExp(regex) });

      const url = comment.match(new RegExp(regex));

      console.log({ url });

      if (url) {
        core.setOutput("url", url[0]);
      }
    }
  }
} catch (error) {
  core.setFailed(error.message);
}
