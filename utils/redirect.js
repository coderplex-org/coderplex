import Router from 'next/router';

export default (
  ctx,
  to = `/login?next=${encodeURIComponent(
    ctx.req ? ctx.req.url : ctx.pathname,
  )}`,
) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: to });
    ctx.res.end();
    return {};
  }
  return Router.push(to);
};
