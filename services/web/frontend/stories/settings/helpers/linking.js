const MOCK_DELAY = 1000

export function defaultSetupMocks(fetchMock) {
  fetchMock
    .post('/user/oauth-unlink', 200, { delay: MOCK_DELAY })
    .get(
      'express:/user/tpds/queues',
      { tpdsToWeb: 0, webToTpds: 0 },
      { delay: MOCK_DELAY }
    )
}

export function setDefaultMeta() {
  window.metaAttributesCache.set('ol-user', {
    ...window.metaAttributesCache.get('ol-user'),
    features: { github: true, dropbox: true, mendeley: false, zotero: false },
    refProviders: {
      mendeley: true,
      zotero: true,
    },
  })
  window.metaAttributesCache.set('ol-github', { enabled: false })
  window.metaAttributesCache.set('ol-dropbox', { registered: true })
  window.metaAttributesCache.set('ol-thirdPartyIds', {
    collabratec: 'collabratec-id',
    google: 'google-id',
    twitter: 'twitter-id',
  })

  window.metaAttributesCache.set('ol-oauthProviders', {
    collabratec: {
      descriptionKey: 'linked_collabratec_description',
      descriptionOptions: { appName: 'Overleaf' },
      name: 'IEEE Collabratec®',
      hideWhenNotLinked: true,
      linkPath: '/collabratec/auth/link',
    },
    google: {
      descriptionKey: 'login_with_service',
      descriptionOptions: { service: 'Google' },
      name: 'Google',
      linkPath: '/auth/google',
    },
    orcid: {
      descriptionKey: 'oauth_orcid_description',
      descriptionOptions: {
        link: '/blog/434',
        appName: 'Overleaf',
      },
      name: 'Orcid',
      linkPath: '/auth/orcid',
    },
    twitter: {
      hideWhenNotLinked: true,
      name: 'Twitter',
      linkPath: '/auth/twitter',
    },
  })
  window.metaAttributesCache.delete('integrationLinkingWidgets')
  window.metaAttributesCache.delete('referenceLinkingWidgets')
}
