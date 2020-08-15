
export default {
  '/groups/:id': {
    tag: 'page-groups-single',
  },
  '/modals': {
    tag: 'page-modals',
  },
  '/users/:id': {
    tag: 'page-users-single',
  },
  '/mypage': {
    tag: 'page-users-single',
  },
  '/@:screen_name': {
    tag: 'page-users-single',
  },
  '/tutorial': {
    tag: 'page-tutorial',
  },
  '/game-setting': {
    tag: 'page-game-setting',
  },
  '/player-setting': {
    tag: 'page-player-setting',
  },
  '/': {
    tag: 'page-index',
    // ssr: false,
  },

  // debug
  '/debug': {
    tag: 'page-debug',
  },
  '/debug/redirect': {
    tag: 'page-debug-redirect',
  },
  // URL は変えずタグだけリダイレクトさせる
  '/debug/tagredirect': {
    tag: async ({req, res}) => {
      // ここで db の存在チェックとかしてなければ 404 に飛ばす
      res.status(404);
      return 'page-error';
    },
  },

};

