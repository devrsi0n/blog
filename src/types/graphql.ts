export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};











export type Article = Node & {
   __typename?: 'Article',
  id: Scalars['ID'],
  slug: Scalars['String'],
  title: Scalars['String'],
  date: Scalars['Date'],
  author: Scalars['String'],
  excerpt: Scalars['String'],
  body: Scalars['String'],
  hero?: Maybe<File>,
  heroRef: Scalars['String'],
  timeToRead?: Maybe<Scalars['Int']>,
  secret?: Maybe<Scalars['Boolean']>,
  subscription?: Maybe<Scalars['Boolean']>,
  filePath?: Maybe<Scalars['String']>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ArticleDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ArticleExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};

export type ArticleConnection = {
   __typename?: 'ArticleConnection',
  totalCount: Scalars['Int'],
  edges: Array<ArticleEdge>,
  nodes: Array<Article>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ArticleGroupConnection>,
};


export type ArticleConnectionDistinctArgs = {
  field: ArticleFieldsEnum
};


export type ArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ArticleFieldsEnum
};

export type ArticleEdge = {
   __typename?: 'ArticleEdge',
  next?: Maybe<Article>,
  node: Article,
  previous?: Maybe<Article>,
};

export enum ArticleFieldsEnum {
  Id = 'id',
  Slug = 'slug',
  Title = 'title',
  Date = 'date',
  Author = 'author',
  Excerpt = 'excerpt',
  Body = 'body',
  HeroSourceInstanceName = 'hero___sourceInstanceName',
  HeroAbsolutePath = 'hero___absolutePath',
  HeroRelativePath = 'hero___relativePath',
  HeroExtension = 'hero___extension',
  HeroSize = 'hero___size',
  HeroPrettySize = 'hero___prettySize',
  HeroModifiedTime = 'hero___modifiedTime',
  HeroAccessTime = 'hero___accessTime',
  HeroChangeTime = 'hero___changeTime',
  HeroBirthTime = 'hero___birthTime',
  HeroRoot = 'hero___root',
  HeroDir = 'hero___dir',
  HeroBase = 'hero___base',
  HeroExt = 'hero___ext',
  HeroName = 'hero___name',
  HeroRelativeDirectory = 'hero___relativeDirectory',
  HeroDev = 'hero___dev',
  HeroMode = 'hero___mode',
  HeroNlink = 'hero___nlink',
  HeroUid = 'hero___uid',
  HeroGid = 'hero___gid',
  HeroRdev = 'hero___rdev',
  HeroIno = 'hero___ino',
  HeroAtimeMs = 'hero___atimeMs',
  HeroMtimeMs = 'hero___mtimeMs',
  HeroCtimeMs = 'hero___ctimeMs',
  HeroAtime = 'hero___atime',
  HeroMtime = 'hero___mtime',
  HeroCtime = 'hero___ctime',
  HeroBirthtime = 'hero___birthtime',
  HeroBirthtimeMs = 'hero___birthtimeMs',
  HeroBlksize = 'hero___blksize',
  HeroBlocks = 'hero___blocks',
  HeroPublicUrl = 'hero___publicURL',
  HeroChildImageSharpFixedBase64 = 'hero___childImageSharp___fixed___base64',
  HeroChildImageSharpFixedTracedSvg = 'hero___childImageSharp___fixed___tracedSVG',
  HeroChildImageSharpFixedAspectRatio = 'hero___childImageSharp___fixed___aspectRatio',
  HeroChildImageSharpFixedWidth = 'hero___childImageSharp___fixed___width',
  HeroChildImageSharpFixedHeight = 'hero___childImageSharp___fixed___height',
  HeroChildImageSharpFixedSrc = 'hero___childImageSharp___fixed___src',
  HeroChildImageSharpFixedSrcSet = 'hero___childImageSharp___fixed___srcSet',
  HeroChildImageSharpFixedSrcWebp = 'hero___childImageSharp___fixed___srcWebp',
  HeroChildImageSharpFixedSrcSetWebp = 'hero___childImageSharp___fixed___srcSetWebp',
  HeroChildImageSharpFixedOriginalName = 'hero___childImageSharp___fixed___originalName',
  HeroChildImageSharpResolutionsBase64 = 'hero___childImageSharp___resolutions___base64',
  HeroChildImageSharpResolutionsTracedSvg = 'hero___childImageSharp___resolutions___tracedSVG',
  HeroChildImageSharpResolutionsAspectRatio = 'hero___childImageSharp___resolutions___aspectRatio',
  HeroChildImageSharpResolutionsWidth = 'hero___childImageSharp___resolutions___width',
  HeroChildImageSharpResolutionsHeight = 'hero___childImageSharp___resolutions___height',
  HeroChildImageSharpResolutionsSrc = 'hero___childImageSharp___resolutions___src',
  HeroChildImageSharpResolutionsSrcSet = 'hero___childImageSharp___resolutions___srcSet',
  HeroChildImageSharpResolutionsSrcWebp = 'hero___childImageSharp___resolutions___srcWebp',
  HeroChildImageSharpResolutionsSrcSetWebp = 'hero___childImageSharp___resolutions___srcSetWebp',
  HeroChildImageSharpResolutionsOriginalName = 'hero___childImageSharp___resolutions___originalName',
  HeroChildImageSharpFluidBase64 = 'hero___childImageSharp___fluid___base64',
  HeroChildImageSharpFluidTracedSvg = 'hero___childImageSharp___fluid___tracedSVG',
  HeroChildImageSharpFluidAspectRatio = 'hero___childImageSharp___fluid___aspectRatio',
  HeroChildImageSharpFluidSrc = 'hero___childImageSharp___fluid___src',
  HeroChildImageSharpFluidSrcSet = 'hero___childImageSharp___fluid___srcSet',
  HeroChildImageSharpFluidSrcWebp = 'hero___childImageSharp___fluid___srcWebp',
  HeroChildImageSharpFluidSrcSetWebp = 'hero___childImageSharp___fluid___srcSetWebp',
  HeroChildImageSharpFluidSizes = 'hero___childImageSharp___fluid___sizes',
  HeroChildImageSharpFluidOriginalImg = 'hero___childImageSharp___fluid___originalImg',
  HeroChildImageSharpFluidOriginalName = 'hero___childImageSharp___fluid___originalName',
  HeroChildImageSharpFluidPresentationWidth = 'hero___childImageSharp___fluid___presentationWidth',
  HeroChildImageSharpFluidPresentationHeight = 'hero___childImageSharp___fluid___presentationHeight',
  HeroChildImageSharpSizesBase64 = 'hero___childImageSharp___sizes___base64',
  HeroChildImageSharpSizesTracedSvg = 'hero___childImageSharp___sizes___tracedSVG',
  HeroChildImageSharpSizesAspectRatio = 'hero___childImageSharp___sizes___aspectRatio',
  HeroChildImageSharpSizesSrc = 'hero___childImageSharp___sizes___src',
  HeroChildImageSharpSizesSrcSet = 'hero___childImageSharp___sizes___srcSet',
  HeroChildImageSharpSizesSrcWebp = 'hero___childImageSharp___sizes___srcWebp',
  HeroChildImageSharpSizesSrcSetWebp = 'hero___childImageSharp___sizes___srcSetWebp',
  HeroChildImageSharpSizesSizes = 'hero___childImageSharp___sizes___sizes',
  HeroChildImageSharpSizesOriginalImg = 'hero___childImageSharp___sizes___originalImg',
  HeroChildImageSharpSizesOriginalName = 'hero___childImageSharp___sizes___originalName',
  HeroChildImageSharpSizesPresentationWidth = 'hero___childImageSharp___sizes___presentationWidth',
  HeroChildImageSharpSizesPresentationHeight = 'hero___childImageSharp___sizes___presentationHeight',
  HeroChildImageSharpOriginalWidth = 'hero___childImageSharp___original___width',
  HeroChildImageSharpOriginalHeight = 'hero___childImageSharp___original___height',
  HeroChildImageSharpOriginalSrc = 'hero___childImageSharp___original___src',
  HeroChildImageSharpResizeSrc = 'hero___childImageSharp___resize___src',
  HeroChildImageSharpResizeTracedSvg = 'hero___childImageSharp___resize___tracedSVG',
  HeroChildImageSharpResizeWidth = 'hero___childImageSharp___resize___width',
  HeroChildImageSharpResizeHeight = 'hero___childImageSharp___resize___height',
  HeroChildImageSharpResizeAspectRatio = 'hero___childImageSharp___resize___aspectRatio',
  HeroChildImageSharpResizeOriginalName = 'hero___childImageSharp___resize___originalName',
  HeroChildImageSharpId = 'hero___childImageSharp___id',
  HeroChildImageSharpParentId = 'hero___childImageSharp___parent___id',
  HeroChildImageSharpParentChildren = 'hero___childImageSharp___parent___children',
  HeroChildImageSharpChildren = 'hero___childImageSharp___children',
  HeroChildImageSharpChildrenId = 'hero___childImageSharp___children___id',
  HeroChildImageSharpChildrenChildren = 'hero___childImageSharp___children___children',
  HeroChildImageSharpInternalContent = 'hero___childImageSharp___internal___content',
  HeroChildImageSharpInternalContentDigest = 'hero___childImageSharp___internal___contentDigest',
  HeroChildImageSharpInternalDescription = 'hero___childImageSharp___internal___description',
  HeroChildImageSharpInternalFieldOwners = 'hero___childImageSharp___internal___fieldOwners',
  HeroChildImageSharpInternalIgnoreType = 'hero___childImageSharp___internal___ignoreType',
  HeroChildImageSharpInternalMediaType = 'hero___childImageSharp___internal___mediaType',
  HeroChildImageSharpInternalOwner = 'hero___childImageSharp___internal___owner',
  HeroChildImageSharpInternalType = 'hero___childImageSharp___internal___type',
  HeroId = 'hero___id',
  HeroParentId = 'hero___parent___id',
  HeroParentParentId = 'hero___parent___parent___id',
  HeroParentParentChildren = 'hero___parent___parent___children',
  HeroParentChildren = 'hero___parent___children',
  HeroParentChildrenId = 'hero___parent___children___id',
  HeroParentChildrenChildren = 'hero___parent___children___children',
  HeroParentInternalContent = 'hero___parent___internal___content',
  HeroParentInternalContentDigest = 'hero___parent___internal___contentDigest',
  HeroParentInternalDescription = 'hero___parent___internal___description',
  HeroParentInternalFieldOwners = 'hero___parent___internal___fieldOwners',
  HeroParentInternalIgnoreType = 'hero___parent___internal___ignoreType',
  HeroParentInternalMediaType = 'hero___parent___internal___mediaType',
  HeroParentInternalOwner = 'hero___parent___internal___owner',
  HeroParentInternalType = 'hero___parent___internal___type',
  HeroChildren = 'hero___children',
  HeroChildrenId = 'hero___children___id',
  HeroChildrenParentId = 'hero___children___parent___id',
  HeroChildrenParentChildren = 'hero___children___parent___children',
  HeroChildrenChildren = 'hero___children___children',
  HeroChildrenChildrenId = 'hero___children___children___id',
  HeroChildrenChildrenChildren = 'hero___children___children___children',
  HeroChildrenInternalContent = 'hero___children___internal___content',
  HeroChildrenInternalContentDigest = 'hero___children___internal___contentDigest',
  HeroChildrenInternalDescription = 'hero___children___internal___description',
  HeroChildrenInternalFieldOwners = 'hero___children___internal___fieldOwners',
  HeroChildrenInternalIgnoreType = 'hero___children___internal___ignoreType',
  HeroChildrenInternalMediaType = 'hero___children___internal___mediaType',
  HeroChildrenInternalOwner = 'hero___children___internal___owner',
  HeroChildrenInternalType = 'hero___children___internal___type',
  HeroInternalContent = 'hero___internal___content',
  HeroInternalContentDigest = 'hero___internal___contentDigest',
  HeroInternalDescription = 'hero___internal___description',
  HeroInternalFieldOwners = 'hero___internal___fieldOwners',
  HeroInternalIgnoreType = 'hero___internal___ignoreType',
  HeroInternalMediaType = 'hero___internal___mediaType',
  HeroInternalOwner = 'hero___internal___owner',
  HeroInternalType = 'hero___internal___type',
  HeroChildMdxRawBody = 'hero___childMdx___rawBody',
  HeroChildMdxFileAbsolutePath = 'hero___childMdx___fileAbsolutePath',
  HeroChildMdxFrontmatterTitle = 'hero___childMdx___frontmatter___title',
  HeroChildMdxFrontmatterDate = 'hero___childMdx___frontmatter___date',
  HeroChildMdxFrontmatterExcerpt = 'hero___childMdx___frontmatter___excerpt',
  HeroChildMdxFrontmatterSecret = 'hero___childMdx___frontmatter___secret',
  HeroChildMdxFrontmatterHeroRef = 'hero___childMdx___frontmatter___heroRef',
  HeroChildMdxFrontmatterTags = 'hero___childMdx___frontmatter___tags',
  HeroChildMdxBody = 'hero___childMdx___body',
  HeroChildMdxExcerpt = 'hero___childMdx___excerpt',
  HeroChildMdxHeadings = 'hero___childMdx___headings',
  HeroChildMdxHeadingsValue = 'hero___childMdx___headings___value',
  HeroChildMdxHeadingsDepth = 'hero___childMdx___headings___depth',
  HeroChildMdxHtml = 'hero___childMdx___html',
  HeroChildMdxMdxAst = 'hero___childMdx___mdxAST',
  HeroChildMdxTableOfContents = 'hero___childMdx___tableOfContents',
  HeroChildMdxTimeToRead = 'hero___childMdx___timeToRead',
  HeroChildMdxWordCountParagraphs = 'hero___childMdx___wordCount___paragraphs',
  HeroChildMdxWordCountSentences = 'hero___childMdx___wordCount___sentences',
  HeroChildMdxWordCountWords = 'hero___childMdx___wordCount___words',
  HeroChildMdxId = 'hero___childMdx___id',
  HeroChildMdxParentId = 'hero___childMdx___parent___id',
  HeroChildMdxParentChildren = 'hero___childMdx___parent___children',
  HeroChildMdxChildren = 'hero___childMdx___children',
  HeroChildMdxChildrenId = 'hero___childMdx___children___id',
  HeroChildMdxChildrenChildren = 'hero___childMdx___children___children',
  HeroChildMdxInternalContent = 'hero___childMdx___internal___content',
  HeroChildMdxInternalContentDigest = 'hero___childMdx___internal___contentDigest',
  HeroChildMdxInternalDescription = 'hero___childMdx___internal___description',
  HeroChildMdxInternalFieldOwners = 'hero___childMdx___internal___fieldOwners',
  HeroChildMdxInternalIgnoreType = 'hero___childMdx___internal___ignoreType',
  HeroChildMdxInternalMediaType = 'hero___childMdx___internal___mediaType',
  HeroChildMdxInternalOwner = 'hero___childMdx___internal___owner',
  HeroChildMdxInternalType = 'hero___childMdx___internal___type',
  HeroChildAuthorsYamlId = 'hero___childAuthorsYaml___id',
  HeroChildAuthorsYamlParentId = 'hero___childAuthorsYaml___parent___id',
  HeroChildAuthorsYamlParentChildren = 'hero___childAuthorsYaml___parent___children',
  HeroChildAuthorsYamlChildren = 'hero___childAuthorsYaml___children',
  HeroChildAuthorsYamlChildrenId = 'hero___childAuthorsYaml___children___id',
  HeroChildAuthorsYamlChildrenChildren = 'hero___childAuthorsYaml___children___children',
  HeroChildAuthorsYamlInternalContent = 'hero___childAuthorsYaml___internal___content',
  HeroChildAuthorsYamlInternalContentDigest = 'hero___childAuthorsYaml___internal___contentDigest',
  HeroChildAuthorsYamlInternalDescription = 'hero___childAuthorsYaml___internal___description',
  HeroChildAuthorsYamlInternalFieldOwners = 'hero___childAuthorsYaml___internal___fieldOwners',
  HeroChildAuthorsYamlInternalIgnoreType = 'hero___childAuthorsYaml___internal___ignoreType',
  HeroChildAuthorsYamlInternalMediaType = 'hero___childAuthorsYaml___internal___mediaType',
  HeroChildAuthorsYamlInternalOwner = 'hero___childAuthorsYaml___internal___owner',
  HeroChildAuthorsYamlInternalType = 'hero___childAuthorsYaml___internal___type',
  HeroChildAuthorsYamlName = 'hero___childAuthorsYaml___name',
  HeroChildAuthorsYamlBio = 'hero___childAuthorsYaml___bio',
  HeroChildAuthorsYamlAvatarSourceInstanceName = 'hero___childAuthorsYaml___avatar___sourceInstanceName',
  HeroChildAuthorsYamlAvatarAbsolutePath = 'hero___childAuthorsYaml___avatar___absolutePath',
  HeroChildAuthorsYamlAvatarRelativePath = 'hero___childAuthorsYaml___avatar___relativePath',
  HeroChildAuthorsYamlAvatarExtension = 'hero___childAuthorsYaml___avatar___extension',
  HeroChildAuthorsYamlAvatarSize = 'hero___childAuthorsYaml___avatar___size',
  HeroChildAuthorsYamlAvatarPrettySize = 'hero___childAuthorsYaml___avatar___prettySize',
  HeroChildAuthorsYamlAvatarModifiedTime = 'hero___childAuthorsYaml___avatar___modifiedTime',
  HeroChildAuthorsYamlAvatarAccessTime = 'hero___childAuthorsYaml___avatar___accessTime',
  HeroChildAuthorsYamlAvatarChangeTime = 'hero___childAuthorsYaml___avatar___changeTime',
  HeroChildAuthorsYamlAvatarBirthTime = 'hero___childAuthorsYaml___avatar___birthTime',
  HeroChildAuthorsYamlAvatarRoot = 'hero___childAuthorsYaml___avatar___root',
  HeroChildAuthorsYamlAvatarDir = 'hero___childAuthorsYaml___avatar___dir',
  HeroChildAuthorsYamlAvatarBase = 'hero___childAuthorsYaml___avatar___base',
  HeroChildAuthorsYamlAvatarExt = 'hero___childAuthorsYaml___avatar___ext',
  HeroChildAuthorsYamlAvatarName = 'hero___childAuthorsYaml___avatar___name',
  HeroChildAuthorsYamlAvatarRelativeDirectory = 'hero___childAuthorsYaml___avatar___relativeDirectory',
  HeroChildAuthorsYamlAvatarDev = 'hero___childAuthorsYaml___avatar___dev',
  HeroChildAuthorsYamlAvatarMode = 'hero___childAuthorsYaml___avatar___mode',
  HeroChildAuthorsYamlAvatarNlink = 'hero___childAuthorsYaml___avatar___nlink',
  HeroChildAuthorsYamlAvatarUid = 'hero___childAuthorsYaml___avatar___uid',
  HeroChildAuthorsYamlAvatarGid = 'hero___childAuthorsYaml___avatar___gid',
  HeroChildAuthorsYamlAvatarRdev = 'hero___childAuthorsYaml___avatar___rdev',
  HeroChildAuthorsYamlAvatarIno = 'hero___childAuthorsYaml___avatar___ino',
  HeroChildAuthorsYamlAvatarAtimeMs = 'hero___childAuthorsYaml___avatar___atimeMs',
  HeroChildAuthorsYamlAvatarMtimeMs = 'hero___childAuthorsYaml___avatar___mtimeMs',
  HeroChildAuthorsYamlAvatarCtimeMs = 'hero___childAuthorsYaml___avatar___ctimeMs',
  HeroChildAuthorsYamlAvatarAtime = 'hero___childAuthorsYaml___avatar___atime',
  HeroChildAuthorsYamlAvatarMtime = 'hero___childAuthorsYaml___avatar___mtime',
  HeroChildAuthorsYamlAvatarCtime = 'hero___childAuthorsYaml___avatar___ctime',
  HeroChildAuthorsYamlAvatarBirthtime = 'hero___childAuthorsYaml___avatar___birthtime',
  HeroChildAuthorsYamlAvatarBirthtimeMs = 'hero___childAuthorsYaml___avatar___birthtimeMs',
  HeroChildAuthorsYamlAvatarBlksize = 'hero___childAuthorsYaml___avatar___blksize',
  HeroChildAuthorsYamlAvatarBlocks = 'hero___childAuthorsYaml___avatar___blocks',
  HeroChildAuthorsYamlAvatarPublicUrl = 'hero___childAuthorsYaml___avatar___publicURL',
  HeroChildAuthorsYamlAvatarId = 'hero___childAuthorsYaml___avatar___id',
  HeroChildAuthorsYamlAvatarChildren = 'hero___childAuthorsYaml___avatar___children',
  HeroChildAuthorsYamlFeatured = 'hero___childAuthorsYaml___featured',
  HeroChildAuthorsYamlSocial = 'hero___childAuthorsYaml___social',
  HeroChildAuthorsYamlSocialUrl = 'hero___childAuthorsYaml___social___url',
  HeroRef = 'heroRef',
  TimeToRead = 'timeToRead',
  Secret = 'secret',
  Subscription = 'subscription',
  FilePath = 'filePath',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<FileFilterInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  secret?: Maybe<BooleanQueryOperatorInput>,
  subscription?: Maybe<BooleanQueryOperatorInput>,
  filePath?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ArticleGroupConnection = {
   __typename?: 'ArticleGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ArticleEdge>,
  nodes: Array<Article>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ArticleSortInput = {
  fields?: Maybe<Array<Maybe<ArticleFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Author = Node & {
   __typename?: 'Author',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
  avatar?: Maybe<File>,
  featured?: Maybe<Scalars['Boolean']>,
  social?: Maybe<Array<Maybe<AuthorSocial>>>,
  authorsPage?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Scalars['String']>,
};

export type AuthorConnection = {
   __typename?: 'AuthorConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorEdge>,
  nodes: Array<Author>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<AuthorGroupConnection>,
};


export type AuthorConnectionDistinctArgs = {
  field: AuthorFieldsEnum
};


export type AuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: AuthorFieldsEnum
};

export type AuthorEdge = {
   __typename?: 'AuthorEdge',
  next?: Maybe<Author>,
  node: Author,
  previous?: Maybe<Author>,
};

export enum AuthorFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Bio = 'bio',
  AvatarSourceInstanceName = 'avatar___sourceInstanceName',
  AvatarAbsolutePath = 'avatar___absolutePath',
  AvatarRelativePath = 'avatar___relativePath',
  AvatarExtension = 'avatar___extension',
  AvatarSize = 'avatar___size',
  AvatarPrettySize = 'avatar___prettySize',
  AvatarModifiedTime = 'avatar___modifiedTime',
  AvatarAccessTime = 'avatar___accessTime',
  AvatarChangeTime = 'avatar___changeTime',
  AvatarBirthTime = 'avatar___birthTime',
  AvatarRoot = 'avatar___root',
  AvatarDir = 'avatar___dir',
  AvatarBase = 'avatar___base',
  AvatarExt = 'avatar___ext',
  AvatarName = 'avatar___name',
  AvatarRelativeDirectory = 'avatar___relativeDirectory',
  AvatarDev = 'avatar___dev',
  AvatarMode = 'avatar___mode',
  AvatarNlink = 'avatar___nlink',
  AvatarUid = 'avatar___uid',
  AvatarGid = 'avatar___gid',
  AvatarRdev = 'avatar___rdev',
  AvatarIno = 'avatar___ino',
  AvatarAtimeMs = 'avatar___atimeMs',
  AvatarMtimeMs = 'avatar___mtimeMs',
  AvatarCtimeMs = 'avatar___ctimeMs',
  AvatarAtime = 'avatar___atime',
  AvatarMtime = 'avatar___mtime',
  AvatarCtime = 'avatar___ctime',
  AvatarBirthtime = 'avatar___birthtime',
  AvatarBirthtimeMs = 'avatar___birthtimeMs',
  AvatarBlksize = 'avatar___blksize',
  AvatarBlocks = 'avatar___blocks',
  AvatarPublicUrl = 'avatar___publicURL',
  AvatarChildImageSharpFixedBase64 = 'avatar___childImageSharp___fixed___base64',
  AvatarChildImageSharpFixedTracedSvg = 'avatar___childImageSharp___fixed___tracedSVG',
  AvatarChildImageSharpFixedAspectRatio = 'avatar___childImageSharp___fixed___aspectRatio',
  AvatarChildImageSharpFixedWidth = 'avatar___childImageSharp___fixed___width',
  AvatarChildImageSharpFixedHeight = 'avatar___childImageSharp___fixed___height',
  AvatarChildImageSharpFixedSrc = 'avatar___childImageSharp___fixed___src',
  AvatarChildImageSharpFixedSrcSet = 'avatar___childImageSharp___fixed___srcSet',
  AvatarChildImageSharpFixedSrcWebp = 'avatar___childImageSharp___fixed___srcWebp',
  AvatarChildImageSharpFixedSrcSetWebp = 'avatar___childImageSharp___fixed___srcSetWebp',
  AvatarChildImageSharpFixedOriginalName = 'avatar___childImageSharp___fixed___originalName',
  AvatarChildImageSharpResolutionsBase64 = 'avatar___childImageSharp___resolutions___base64',
  AvatarChildImageSharpResolutionsTracedSvg = 'avatar___childImageSharp___resolutions___tracedSVG',
  AvatarChildImageSharpResolutionsAspectRatio = 'avatar___childImageSharp___resolutions___aspectRatio',
  AvatarChildImageSharpResolutionsWidth = 'avatar___childImageSharp___resolutions___width',
  AvatarChildImageSharpResolutionsHeight = 'avatar___childImageSharp___resolutions___height',
  AvatarChildImageSharpResolutionsSrc = 'avatar___childImageSharp___resolutions___src',
  AvatarChildImageSharpResolutionsSrcSet = 'avatar___childImageSharp___resolutions___srcSet',
  AvatarChildImageSharpResolutionsSrcWebp = 'avatar___childImageSharp___resolutions___srcWebp',
  AvatarChildImageSharpResolutionsSrcSetWebp = 'avatar___childImageSharp___resolutions___srcSetWebp',
  AvatarChildImageSharpResolutionsOriginalName = 'avatar___childImageSharp___resolutions___originalName',
  AvatarChildImageSharpFluidBase64 = 'avatar___childImageSharp___fluid___base64',
  AvatarChildImageSharpFluidTracedSvg = 'avatar___childImageSharp___fluid___tracedSVG',
  AvatarChildImageSharpFluidAspectRatio = 'avatar___childImageSharp___fluid___aspectRatio',
  AvatarChildImageSharpFluidSrc = 'avatar___childImageSharp___fluid___src',
  AvatarChildImageSharpFluidSrcSet = 'avatar___childImageSharp___fluid___srcSet',
  AvatarChildImageSharpFluidSrcWebp = 'avatar___childImageSharp___fluid___srcWebp',
  AvatarChildImageSharpFluidSrcSetWebp = 'avatar___childImageSharp___fluid___srcSetWebp',
  AvatarChildImageSharpFluidSizes = 'avatar___childImageSharp___fluid___sizes',
  AvatarChildImageSharpFluidOriginalImg = 'avatar___childImageSharp___fluid___originalImg',
  AvatarChildImageSharpFluidOriginalName = 'avatar___childImageSharp___fluid___originalName',
  AvatarChildImageSharpFluidPresentationWidth = 'avatar___childImageSharp___fluid___presentationWidth',
  AvatarChildImageSharpFluidPresentationHeight = 'avatar___childImageSharp___fluid___presentationHeight',
  AvatarChildImageSharpSizesBase64 = 'avatar___childImageSharp___sizes___base64',
  AvatarChildImageSharpSizesTracedSvg = 'avatar___childImageSharp___sizes___tracedSVG',
  AvatarChildImageSharpSizesAspectRatio = 'avatar___childImageSharp___sizes___aspectRatio',
  AvatarChildImageSharpSizesSrc = 'avatar___childImageSharp___sizes___src',
  AvatarChildImageSharpSizesSrcSet = 'avatar___childImageSharp___sizes___srcSet',
  AvatarChildImageSharpSizesSrcWebp = 'avatar___childImageSharp___sizes___srcWebp',
  AvatarChildImageSharpSizesSrcSetWebp = 'avatar___childImageSharp___sizes___srcSetWebp',
  AvatarChildImageSharpSizesSizes = 'avatar___childImageSharp___sizes___sizes',
  AvatarChildImageSharpSizesOriginalImg = 'avatar___childImageSharp___sizes___originalImg',
  AvatarChildImageSharpSizesOriginalName = 'avatar___childImageSharp___sizes___originalName',
  AvatarChildImageSharpSizesPresentationWidth = 'avatar___childImageSharp___sizes___presentationWidth',
  AvatarChildImageSharpSizesPresentationHeight = 'avatar___childImageSharp___sizes___presentationHeight',
  AvatarChildImageSharpOriginalWidth = 'avatar___childImageSharp___original___width',
  AvatarChildImageSharpOriginalHeight = 'avatar___childImageSharp___original___height',
  AvatarChildImageSharpOriginalSrc = 'avatar___childImageSharp___original___src',
  AvatarChildImageSharpResizeSrc = 'avatar___childImageSharp___resize___src',
  AvatarChildImageSharpResizeTracedSvg = 'avatar___childImageSharp___resize___tracedSVG',
  AvatarChildImageSharpResizeWidth = 'avatar___childImageSharp___resize___width',
  AvatarChildImageSharpResizeHeight = 'avatar___childImageSharp___resize___height',
  AvatarChildImageSharpResizeAspectRatio = 'avatar___childImageSharp___resize___aspectRatio',
  AvatarChildImageSharpResizeOriginalName = 'avatar___childImageSharp___resize___originalName',
  AvatarChildImageSharpId = 'avatar___childImageSharp___id',
  AvatarChildImageSharpParentId = 'avatar___childImageSharp___parent___id',
  AvatarChildImageSharpParentChildren = 'avatar___childImageSharp___parent___children',
  AvatarChildImageSharpChildren = 'avatar___childImageSharp___children',
  AvatarChildImageSharpChildrenId = 'avatar___childImageSharp___children___id',
  AvatarChildImageSharpChildrenChildren = 'avatar___childImageSharp___children___children',
  AvatarChildImageSharpInternalContent = 'avatar___childImageSharp___internal___content',
  AvatarChildImageSharpInternalContentDigest = 'avatar___childImageSharp___internal___contentDigest',
  AvatarChildImageSharpInternalDescription = 'avatar___childImageSharp___internal___description',
  AvatarChildImageSharpInternalFieldOwners = 'avatar___childImageSharp___internal___fieldOwners',
  AvatarChildImageSharpInternalIgnoreType = 'avatar___childImageSharp___internal___ignoreType',
  AvatarChildImageSharpInternalMediaType = 'avatar___childImageSharp___internal___mediaType',
  AvatarChildImageSharpInternalOwner = 'avatar___childImageSharp___internal___owner',
  AvatarChildImageSharpInternalType = 'avatar___childImageSharp___internal___type',
  AvatarId = 'avatar___id',
  AvatarParentId = 'avatar___parent___id',
  AvatarParentParentId = 'avatar___parent___parent___id',
  AvatarParentParentChildren = 'avatar___parent___parent___children',
  AvatarParentChildren = 'avatar___parent___children',
  AvatarParentChildrenId = 'avatar___parent___children___id',
  AvatarParentChildrenChildren = 'avatar___parent___children___children',
  AvatarParentInternalContent = 'avatar___parent___internal___content',
  AvatarParentInternalContentDigest = 'avatar___parent___internal___contentDigest',
  AvatarParentInternalDescription = 'avatar___parent___internal___description',
  AvatarParentInternalFieldOwners = 'avatar___parent___internal___fieldOwners',
  AvatarParentInternalIgnoreType = 'avatar___parent___internal___ignoreType',
  AvatarParentInternalMediaType = 'avatar___parent___internal___mediaType',
  AvatarParentInternalOwner = 'avatar___parent___internal___owner',
  AvatarParentInternalType = 'avatar___parent___internal___type',
  AvatarChildren = 'avatar___children',
  AvatarChildrenId = 'avatar___children___id',
  AvatarChildrenParentId = 'avatar___children___parent___id',
  AvatarChildrenParentChildren = 'avatar___children___parent___children',
  AvatarChildrenChildren = 'avatar___children___children',
  AvatarChildrenChildrenId = 'avatar___children___children___id',
  AvatarChildrenChildrenChildren = 'avatar___children___children___children',
  AvatarChildrenInternalContent = 'avatar___children___internal___content',
  AvatarChildrenInternalContentDigest = 'avatar___children___internal___contentDigest',
  AvatarChildrenInternalDescription = 'avatar___children___internal___description',
  AvatarChildrenInternalFieldOwners = 'avatar___children___internal___fieldOwners',
  AvatarChildrenInternalIgnoreType = 'avatar___children___internal___ignoreType',
  AvatarChildrenInternalMediaType = 'avatar___children___internal___mediaType',
  AvatarChildrenInternalOwner = 'avatar___children___internal___owner',
  AvatarChildrenInternalType = 'avatar___children___internal___type',
  AvatarInternalContent = 'avatar___internal___content',
  AvatarInternalContentDigest = 'avatar___internal___contentDigest',
  AvatarInternalDescription = 'avatar___internal___description',
  AvatarInternalFieldOwners = 'avatar___internal___fieldOwners',
  AvatarInternalIgnoreType = 'avatar___internal___ignoreType',
  AvatarInternalMediaType = 'avatar___internal___mediaType',
  AvatarInternalOwner = 'avatar___internal___owner',
  AvatarInternalType = 'avatar___internal___type',
  AvatarChildMdxRawBody = 'avatar___childMdx___rawBody',
  AvatarChildMdxFileAbsolutePath = 'avatar___childMdx___fileAbsolutePath',
  AvatarChildMdxFrontmatterTitle = 'avatar___childMdx___frontmatter___title',
  AvatarChildMdxFrontmatterDate = 'avatar___childMdx___frontmatter___date',
  AvatarChildMdxFrontmatterExcerpt = 'avatar___childMdx___frontmatter___excerpt',
  AvatarChildMdxFrontmatterSecret = 'avatar___childMdx___frontmatter___secret',
  AvatarChildMdxFrontmatterHeroRef = 'avatar___childMdx___frontmatter___heroRef',
  AvatarChildMdxFrontmatterTags = 'avatar___childMdx___frontmatter___tags',
  AvatarChildMdxBody = 'avatar___childMdx___body',
  AvatarChildMdxExcerpt = 'avatar___childMdx___excerpt',
  AvatarChildMdxHeadings = 'avatar___childMdx___headings',
  AvatarChildMdxHeadingsValue = 'avatar___childMdx___headings___value',
  AvatarChildMdxHeadingsDepth = 'avatar___childMdx___headings___depth',
  AvatarChildMdxHtml = 'avatar___childMdx___html',
  AvatarChildMdxMdxAst = 'avatar___childMdx___mdxAST',
  AvatarChildMdxTableOfContents = 'avatar___childMdx___tableOfContents',
  AvatarChildMdxTimeToRead = 'avatar___childMdx___timeToRead',
  AvatarChildMdxWordCountParagraphs = 'avatar___childMdx___wordCount___paragraphs',
  AvatarChildMdxWordCountSentences = 'avatar___childMdx___wordCount___sentences',
  AvatarChildMdxWordCountWords = 'avatar___childMdx___wordCount___words',
  AvatarChildMdxId = 'avatar___childMdx___id',
  AvatarChildMdxParentId = 'avatar___childMdx___parent___id',
  AvatarChildMdxParentChildren = 'avatar___childMdx___parent___children',
  AvatarChildMdxChildren = 'avatar___childMdx___children',
  AvatarChildMdxChildrenId = 'avatar___childMdx___children___id',
  AvatarChildMdxChildrenChildren = 'avatar___childMdx___children___children',
  AvatarChildMdxInternalContent = 'avatar___childMdx___internal___content',
  AvatarChildMdxInternalContentDigest = 'avatar___childMdx___internal___contentDigest',
  AvatarChildMdxInternalDescription = 'avatar___childMdx___internal___description',
  AvatarChildMdxInternalFieldOwners = 'avatar___childMdx___internal___fieldOwners',
  AvatarChildMdxInternalIgnoreType = 'avatar___childMdx___internal___ignoreType',
  AvatarChildMdxInternalMediaType = 'avatar___childMdx___internal___mediaType',
  AvatarChildMdxInternalOwner = 'avatar___childMdx___internal___owner',
  AvatarChildMdxInternalType = 'avatar___childMdx___internal___type',
  AvatarChildAuthorsYamlId = 'avatar___childAuthorsYaml___id',
  AvatarChildAuthorsYamlParentId = 'avatar___childAuthorsYaml___parent___id',
  AvatarChildAuthorsYamlParentChildren = 'avatar___childAuthorsYaml___parent___children',
  AvatarChildAuthorsYamlChildren = 'avatar___childAuthorsYaml___children',
  AvatarChildAuthorsYamlChildrenId = 'avatar___childAuthorsYaml___children___id',
  AvatarChildAuthorsYamlChildrenChildren = 'avatar___childAuthorsYaml___children___children',
  AvatarChildAuthorsYamlInternalContent = 'avatar___childAuthorsYaml___internal___content',
  AvatarChildAuthorsYamlInternalContentDigest = 'avatar___childAuthorsYaml___internal___contentDigest',
  AvatarChildAuthorsYamlInternalDescription = 'avatar___childAuthorsYaml___internal___description',
  AvatarChildAuthorsYamlInternalFieldOwners = 'avatar___childAuthorsYaml___internal___fieldOwners',
  AvatarChildAuthorsYamlInternalIgnoreType = 'avatar___childAuthorsYaml___internal___ignoreType',
  AvatarChildAuthorsYamlInternalMediaType = 'avatar___childAuthorsYaml___internal___mediaType',
  AvatarChildAuthorsYamlInternalOwner = 'avatar___childAuthorsYaml___internal___owner',
  AvatarChildAuthorsYamlInternalType = 'avatar___childAuthorsYaml___internal___type',
  AvatarChildAuthorsYamlName = 'avatar___childAuthorsYaml___name',
  AvatarChildAuthorsYamlBio = 'avatar___childAuthorsYaml___bio',
  AvatarChildAuthorsYamlAvatarSourceInstanceName = 'avatar___childAuthorsYaml___avatar___sourceInstanceName',
  AvatarChildAuthorsYamlAvatarAbsolutePath = 'avatar___childAuthorsYaml___avatar___absolutePath',
  AvatarChildAuthorsYamlAvatarRelativePath = 'avatar___childAuthorsYaml___avatar___relativePath',
  AvatarChildAuthorsYamlAvatarExtension = 'avatar___childAuthorsYaml___avatar___extension',
  AvatarChildAuthorsYamlAvatarSize = 'avatar___childAuthorsYaml___avatar___size',
  AvatarChildAuthorsYamlAvatarPrettySize = 'avatar___childAuthorsYaml___avatar___prettySize',
  AvatarChildAuthorsYamlAvatarModifiedTime = 'avatar___childAuthorsYaml___avatar___modifiedTime',
  AvatarChildAuthorsYamlAvatarAccessTime = 'avatar___childAuthorsYaml___avatar___accessTime',
  AvatarChildAuthorsYamlAvatarChangeTime = 'avatar___childAuthorsYaml___avatar___changeTime',
  AvatarChildAuthorsYamlAvatarBirthTime = 'avatar___childAuthorsYaml___avatar___birthTime',
  AvatarChildAuthorsYamlAvatarRoot = 'avatar___childAuthorsYaml___avatar___root',
  AvatarChildAuthorsYamlAvatarDir = 'avatar___childAuthorsYaml___avatar___dir',
  AvatarChildAuthorsYamlAvatarBase = 'avatar___childAuthorsYaml___avatar___base',
  AvatarChildAuthorsYamlAvatarExt = 'avatar___childAuthorsYaml___avatar___ext',
  AvatarChildAuthorsYamlAvatarName = 'avatar___childAuthorsYaml___avatar___name',
  AvatarChildAuthorsYamlAvatarRelativeDirectory = 'avatar___childAuthorsYaml___avatar___relativeDirectory',
  AvatarChildAuthorsYamlAvatarDev = 'avatar___childAuthorsYaml___avatar___dev',
  AvatarChildAuthorsYamlAvatarMode = 'avatar___childAuthorsYaml___avatar___mode',
  AvatarChildAuthorsYamlAvatarNlink = 'avatar___childAuthorsYaml___avatar___nlink',
  AvatarChildAuthorsYamlAvatarUid = 'avatar___childAuthorsYaml___avatar___uid',
  AvatarChildAuthorsYamlAvatarGid = 'avatar___childAuthorsYaml___avatar___gid',
  AvatarChildAuthorsYamlAvatarRdev = 'avatar___childAuthorsYaml___avatar___rdev',
  AvatarChildAuthorsYamlAvatarIno = 'avatar___childAuthorsYaml___avatar___ino',
  AvatarChildAuthorsYamlAvatarAtimeMs = 'avatar___childAuthorsYaml___avatar___atimeMs',
  AvatarChildAuthorsYamlAvatarMtimeMs = 'avatar___childAuthorsYaml___avatar___mtimeMs',
  AvatarChildAuthorsYamlAvatarCtimeMs = 'avatar___childAuthorsYaml___avatar___ctimeMs',
  AvatarChildAuthorsYamlAvatarAtime = 'avatar___childAuthorsYaml___avatar___atime',
  AvatarChildAuthorsYamlAvatarMtime = 'avatar___childAuthorsYaml___avatar___mtime',
  AvatarChildAuthorsYamlAvatarCtime = 'avatar___childAuthorsYaml___avatar___ctime',
  AvatarChildAuthorsYamlAvatarBirthtime = 'avatar___childAuthorsYaml___avatar___birthtime',
  AvatarChildAuthorsYamlAvatarBirthtimeMs = 'avatar___childAuthorsYaml___avatar___birthtimeMs',
  AvatarChildAuthorsYamlAvatarBlksize = 'avatar___childAuthorsYaml___avatar___blksize',
  AvatarChildAuthorsYamlAvatarBlocks = 'avatar___childAuthorsYaml___avatar___blocks',
  AvatarChildAuthorsYamlAvatarPublicUrl = 'avatar___childAuthorsYaml___avatar___publicURL',
  AvatarChildAuthorsYamlAvatarId = 'avatar___childAuthorsYaml___avatar___id',
  AvatarChildAuthorsYamlAvatarChildren = 'avatar___childAuthorsYaml___avatar___children',
  AvatarChildAuthorsYamlFeatured = 'avatar___childAuthorsYaml___featured',
  AvatarChildAuthorsYamlSocial = 'avatar___childAuthorsYaml___social',
  AvatarChildAuthorsYamlSocialUrl = 'avatar___childAuthorsYaml___social___url',
  Featured = 'featured',
  Social = 'social',
  SocialUrl = 'social___url',
  AuthorsPage = 'authorsPage',
  Slug = 'slug'
}

export type AuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<FileFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  social?: Maybe<AuthorSocialFilterListInput>,
  authorsPage?: Maybe<BooleanQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type AuthorGroupConnection = {
   __typename?: 'AuthorGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorEdge>,
  nodes: Array<Author>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type AuthorSocial = {
   __typename?: 'AuthorSocial',
  url?: Maybe<Scalars['String']>,
};

export type AuthorSocialFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type AuthorSocialFilterListInput = {
  elemMatch?: Maybe<AuthorSocialFilterInput>,
};

export type AuthorSortInput = {
  fields?: Maybe<Array<Maybe<AuthorFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type AuthorsYaml = Node & {
   __typename?: 'AuthorsYaml',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  bio?: Maybe<Scalars['String']>,
  avatar?: Maybe<File>,
  featured?: Maybe<Scalars['Boolean']>,
  social?: Maybe<Array<Maybe<AuthorsYamlSocial>>>,
};

export type AuthorsYamlConnection = {
   __typename?: 'AuthorsYamlConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorsYamlEdge>,
  nodes: Array<AuthorsYaml>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<AuthorsYamlGroupConnection>,
};


export type AuthorsYamlConnectionDistinctArgs = {
  field: AuthorsYamlFieldsEnum
};


export type AuthorsYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: AuthorsYamlFieldsEnum
};

export type AuthorsYamlEdge = {
   __typename?: 'AuthorsYamlEdge',
  next?: Maybe<AuthorsYaml>,
  node: AuthorsYaml,
  previous?: Maybe<AuthorsYaml>,
};

export enum AuthorsYamlFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Bio = 'bio',
  AvatarSourceInstanceName = 'avatar___sourceInstanceName',
  AvatarAbsolutePath = 'avatar___absolutePath',
  AvatarRelativePath = 'avatar___relativePath',
  AvatarExtension = 'avatar___extension',
  AvatarSize = 'avatar___size',
  AvatarPrettySize = 'avatar___prettySize',
  AvatarModifiedTime = 'avatar___modifiedTime',
  AvatarAccessTime = 'avatar___accessTime',
  AvatarChangeTime = 'avatar___changeTime',
  AvatarBirthTime = 'avatar___birthTime',
  AvatarRoot = 'avatar___root',
  AvatarDir = 'avatar___dir',
  AvatarBase = 'avatar___base',
  AvatarExt = 'avatar___ext',
  AvatarName = 'avatar___name',
  AvatarRelativeDirectory = 'avatar___relativeDirectory',
  AvatarDev = 'avatar___dev',
  AvatarMode = 'avatar___mode',
  AvatarNlink = 'avatar___nlink',
  AvatarUid = 'avatar___uid',
  AvatarGid = 'avatar___gid',
  AvatarRdev = 'avatar___rdev',
  AvatarIno = 'avatar___ino',
  AvatarAtimeMs = 'avatar___atimeMs',
  AvatarMtimeMs = 'avatar___mtimeMs',
  AvatarCtimeMs = 'avatar___ctimeMs',
  AvatarAtime = 'avatar___atime',
  AvatarMtime = 'avatar___mtime',
  AvatarCtime = 'avatar___ctime',
  AvatarBirthtime = 'avatar___birthtime',
  AvatarBirthtimeMs = 'avatar___birthtimeMs',
  AvatarBlksize = 'avatar___blksize',
  AvatarBlocks = 'avatar___blocks',
  AvatarPublicUrl = 'avatar___publicURL',
  AvatarChildImageSharpFixedBase64 = 'avatar___childImageSharp___fixed___base64',
  AvatarChildImageSharpFixedTracedSvg = 'avatar___childImageSharp___fixed___tracedSVG',
  AvatarChildImageSharpFixedAspectRatio = 'avatar___childImageSharp___fixed___aspectRatio',
  AvatarChildImageSharpFixedWidth = 'avatar___childImageSharp___fixed___width',
  AvatarChildImageSharpFixedHeight = 'avatar___childImageSharp___fixed___height',
  AvatarChildImageSharpFixedSrc = 'avatar___childImageSharp___fixed___src',
  AvatarChildImageSharpFixedSrcSet = 'avatar___childImageSharp___fixed___srcSet',
  AvatarChildImageSharpFixedSrcWebp = 'avatar___childImageSharp___fixed___srcWebp',
  AvatarChildImageSharpFixedSrcSetWebp = 'avatar___childImageSharp___fixed___srcSetWebp',
  AvatarChildImageSharpFixedOriginalName = 'avatar___childImageSharp___fixed___originalName',
  AvatarChildImageSharpResolutionsBase64 = 'avatar___childImageSharp___resolutions___base64',
  AvatarChildImageSharpResolutionsTracedSvg = 'avatar___childImageSharp___resolutions___tracedSVG',
  AvatarChildImageSharpResolutionsAspectRatio = 'avatar___childImageSharp___resolutions___aspectRatio',
  AvatarChildImageSharpResolutionsWidth = 'avatar___childImageSharp___resolutions___width',
  AvatarChildImageSharpResolutionsHeight = 'avatar___childImageSharp___resolutions___height',
  AvatarChildImageSharpResolutionsSrc = 'avatar___childImageSharp___resolutions___src',
  AvatarChildImageSharpResolutionsSrcSet = 'avatar___childImageSharp___resolutions___srcSet',
  AvatarChildImageSharpResolutionsSrcWebp = 'avatar___childImageSharp___resolutions___srcWebp',
  AvatarChildImageSharpResolutionsSrcSetWebp = 'avatar___childImageSharp___resolutions___srcSetWebp',
  AvatarChildImageSharpResolutionsOriginalName = 'avatar___childImageSharp___resolutions___originalName',
  AvatarChildImageSharpFluidBase64 = 'avatar___childImageSharp___fluid___base64',
  AvatarChildImageSharpFluidTracedSvg = 'avatar___childImageSharp___fluid___tracedSVG',
  AvatarChildImageSharpFluidAspectRatio = 'avatar___childImageSharp___fluid___aspectRatio',
  AvatarChildImageSharpFluidSrc = 'avatar___childImageSharp___fluid___src',
  AvatarChildImageSharpFluidSrcSet = 'avatar___childImageSharp___fluid___srcSet',
  AvatarChildImageSharpFluidSrcWebp = 'avatar___childImageSharp___fluid___srcWebp',
  AvatarChildImageSharpFluidSrcSetWebp = 'avatar___childImageSharp___fluid___srcSetWebp',
  AvatarChildImageSharpFluidSizes = 'avatar___childImageSharp___fluid___sizes',
  AvatarChildImageSharpFluidOriginalImg = 'avatar___childImageSharp___fluid___originalImg',
  AvatarChildImageSharpFluidOriginalName = 'avatar___childImageSharp___fluid___originalName',
  AvatarChildImageSharpFluidPresentationWidth = 'avatar___childImageSharp___fluid___presentationWidth',
  AvatarChildImageSharpFluidPresentationHeight = 'avatar___childImageSharp___fluid___presentationHeight',
  AvatarChildImageSharpSizesBase64 = 'avatar___childImageSharp___sizes___base64',
  AvatarChildImageSharpSizesTracedSvg = 'avatar___childImageSharp___sizes___tracedSVG',
  AvatarChildImageSharpSizesAspectRatio = 'avatar___childImageSharp___sizes___aspectRatio',
  AvatarChildImageSharpSizesSrc = 'avatar___childImageSharp___sizes___src',
  AvatarChildImageSharpSizesSrcSet = 'avatar___childImageSharp___sizes___srcSet',
  AvatarChildImageSharpSizesSrcWebp = 'avatar___childImageSharp___sizes___srcWebp',
  AvatarChildImageSharpSizesSrcSetWebp = 'avatar___childImageSharp___sizes___srcSetWebp',
  AvatarChildImageSharpSizesSizes = 'avatar___childImageSharp___sizes___sizes',
  AvatarChildImageSharpSizesOriginalImg = 'avatar___childImageSharp___sizes___originalImg',
  AvatarChildImageSharpSizesOriginalName = 'avatar___childImageSharp___sizes___originalName',
  AvatarChildImageSharpSizesPresentationWidth = 'avatar___childImageSharp___sizes___presentationWidth',
  AvatarChildImageSharpSizesPresentationHeight = 'avatar___childImageSharp___sizes___presentationHeight',
  AvatarChildImageSharpOriginalWidth = 'avatar___childImageSharp___original___width',
  AvatarChildImageSharpOriginalHeight = 'avatar___childImageSharp___original___height',
  AvatarChildImageSharpOriginalSrc = 'avatar___childImageSharp___original___src',
  AvatarChildImageSharpResizeSrc = 'avatar___childImageSharp___resize___src',
  AvatarChildImageSharpResizeTracedSvg = 'avatar___childImageSharp___resize___tracedSVG',
  AvatarChildImageSharpResizeWidth = 'avatar___childImageSharp___resize___width',
  AvatarChildImageSharpResizeHeight = 'avatar___childImageSharp___resize___height',
  AvatarChildImageSharpResizeAspectRatio = 'avatar___childImageSharp___resize___aspectRatio',
  AvatarChildImageSharpResizeOriginalName = 'avatar___childImageSharp___resize___originalName',
  AvatarChildImageSharpId = 'avatar___childImageSharp___id',
  AvatarChildImageSharpParentId = 'avatar___childImageSharp___parent___id',
  AvatarChildImageSharpParentChildren = 'avatar___childImageSharp___parent___children',
  AvatarChildImageSharpChildren = 'avatar___childImageSharp___children',
  AvatarChildImageSharpChildrenId = 'avatar___childImageSharp___children___id',
  AvatarChildImageSharpChildrenChildren = 'avatar___childImageSharp___children___children',
  AvatarChildImageSharpInternalContent = 'avatar___childImageSharp___internal___content',
  AvatarChildImageSharpInternalContentDigest = 'avatar___childImageSharp___internal___contentDigest',
  AvatarChildImageSharpInternalDescription = 'avatar___childImageSharp___internal___description',
  AvatarChildImageSharpInternalFieldOwners = 'avatar___childImageSharp___internal___fieldOwners',
  AvatarChildImageSharpInternalIgnoreType = 'avatar___childImageSharp___internal___ignoreType',
  AvatarChildImageSharpInternalMediaType = 'avatar___childImageSharp___internal___mediaType',
  AvatarChildImageSharpInternalOwner = 'avatar___childImageSharp___internal___owner',
  AvatarChildImageSharpInternalType = 'avatar___childImageSharp___internal___type',
  AvatarId = 'avatar___id',
  AvatarParentId = 'avatar___parent___id',
  AvatarParentParentId = 'avatar___parent___parent___id',
  AvatarParentParentChildren = 'avatar___parent___parent___children',
  AvatarParentChildren = 'avatar___parent___children',
  AvatarParentChildrenId = 'avatar___parent___children___id',
  AvatarParentChildrenChildren = 'avatar___parent___children___children',
  AvatarParentInternalContent = 'avatar___parent___internal___content',
  AvatarParentInternalContentDigest = 'avatar___parent___internal___contentDigest',
  AvatarParentInternalDescription = 'avatar___parent___internal___description',
  AvatarParentInternalFieldOwners = 'avatar___parent___internal___fieldOwners',
  AvatarParentInternalIgnoreType = 'avatar___parent___internal___ignoreType',
  AvatarParentInternalMediaType = 'avatar___parent___internal___mediaType',
  AvatarParentInternalOwner = 'avatar___parent___internal___owner',
  AvatarParentInternalType = 'avatar___parent___internal___type',
  AvatarChildren = 'avatar___children',
  AvatarChildrenId = 'avatar___children___id',
  AvatarChildrenParentId = 'avatar___children___parent___id',
  AvatarChildrenParentChildren = 'avatar___children___parent___children',
  AvatarChildrenChildren = 'avatar___children___children',
  AvatarChildrenChildrenId = 'avatar___children___children___id',
  AvatarChildrenChildrenChildren = 'avatar___children___children___children',
  AvatarChildrenInternalContent = 'avatar___children___internal___content',
  AvatarChildrenInternalContentDigest = 'avatar___children___internal___contentDigest',
  AvatarChildrenInternalDescription = 'avatar___children___internal___description',
  AvatarChildrenInternalFieldOwners = 'avatar___children___internal___fieldOwners',
  AvatarChildrenInternalIgnoreType = 'avatar___children___internal___ignoreType',
  AvatarChildrenInternalMediaType = 'avatar___children___internal___mediaType',
  AvatarChildrenInternalOwner = 'avatar___children___internal___owner',
  AvatarChildrenInternalType = 'avatar___children___internal___type',
  AvatarInternalContent = 'avatar___internal___content',
  AvatarInternalContentDigest = 'avatar___internal___contentDigest',
  AvatarInternalDescription = 'avatar___internal___description',
  AvatarInternalFieldOwners = 'avatar___internal___fieldOwners',
  AvatarInternalIgnoreType = 'avatar___internal___ignoreType',
  AvatarInternalMediaType = 'avatar___internal___mediaType',
  AvatarInternalOwner = 'avatar___internal___owner',
  AvatarInternalType = 'avatar___internal___type',
  AvatarChildMdxRawBody = 'avatar___childMdx___rawBody',
  AvatarChildMdxFileAbsolutePath = 'avatar___childMdx___fileAbsolutePath',
  AvatarChildMdxFrontmatterTitle = 'avatar___childMdx___frontmatter___title',
  AvatarChildMdxFrontmatterDate = 'avatar___childMdx___frontmatter___date',
  AvatarChildMdxFrontmatterExcerpt = 'avatar___childMdx___frontmatter___excerpt',
  AvatarChildMdxFrontmatterSecret = 'avatar___childMdx___frontmatter___secret',
  AvatarChildMdxFrontmatterHeroRef = 'avatar___childMdx___frontmatter___heroRef',
  AvatarChildMdxFrontmatterTags = 'avatar___childMdx___frontmatter___tags',
  AvatarChildMdxBody = 'avatar___childMdx___body',
  AvatarChildMdxExcerpt = 'avatar___childMdx___excerpt',
  AvatarChildMdxHeadings = 'avatar___childMdx___headings',
  AvatarChildMdxHeadingsValue = 'avatar___childMdx___headings___value',
  AvatarChildMdxHeadingsDepth = 'avatar___childMdx___headings___depth',
  AvatarChildMdxHtml = 'avatar___childMdx___html',
  AvatarChildMdxMdxAst = 'avatar___childMdx___mdxAST',
  AvatarChildMdxTableOfContents = 'avatar___childMdx___tableOfContents',
  AvatarChildMdxTimeToRead = 'avatar___childMdx___timeToRead',
  AvatarChildMdxWordCountParagraphs = 'avatar___childMdx___wordCount___paragraphs',
  AvatarChildMdxWordCountSentences = 'avatar___childMdx___wordCount___sentences',
  AvatarChildMdxWordCountWords = 'avatar___childMdx___wordCount___words',
  AvatarChildMdxId = 'avatar___childMdx___id',
  AvatarChildMdxParentId = 'avatar___childMdx___parent___id',
  AvatarChildMdxParentChildren = 'avatar___childMdx___parent___children',
  AvatarChildMdxChildren = 'avatar___childMdx___children',
  AvatarChildMdxChildrenId = 'avatar___childMdx___children___id',
  AvatarChildMdxChildrenChildren = 'avatar___childMdx___children___children',
  AvatarChildMdxInternalContent = 'avatar___childMdx___internal___content',
  AvatarChildMdxInternalContentDigest = 'avatar___childMdx___internal___contentDigest',
  AvatarChildMdxInternalDescription = 'avatar___childMdx___internal___description',
  AvatarChildMdxInternalFieldOwners = 'avatar___childMdx___internal___fieldOwners',
  AvatarChildMdxInternalIgnoreType = 'avatar___childMdx___internal___ignoreType',
  AvatarChildMdxInternalMediaType = 'avatar___childMdx___internal___mediaType',
  AvatarChildMdxInternalOwner = 'avatar___childMdx___internal___owner',
  AvatarChildMdxInternalType = 'avatar___childMdx___internal___type',
  AvatarChildAuthorsYamlId = 'avatar___childAuthorsYaml___id',
  AvatarChildAuthorsYamlParentId = 'avatar___childAuthorsYaml___parent___id',
  AvatarChildAuthorsYamlParentChildren = 'avatar___childAuthorsYaml___parent___children',
  AvatarChildAuthorsYamlChildren = 'avatar___childAuthorsYaml___children',
  AvatarChildAuthorsYamlChildrenId = 'avatar___childAuthorsYaml___children___id',
  AvatarChildAuthorsYamlChildrenChildren = 'avatar___childAuthorsYaml___children___children',
  AvatarChildAuthorsYamlInternalContent = 'avatar___childAuthorsYaml___internal___content',
  AvatarChildAuthorsYamlInternalContentDigest = 'avatar___childAuthorsYaml___internal___contentDigest',
  AvatarChildAuthorsYamlInternalDescription = 'avatar___childAuthorsYaml___internal___description',
  AvatarChildAuthorsYamlInternalFieldOwners = 'avatar___childAuthorsYaml___internal___fieldOwners',
  AvatarChildAuthorsYamlInternalIgnoreType = 'avatar___childAuthorsYaml___internal___ignoreType',
  AvatarChildAuthorsYamlInternalMediaType = 'avatar___childAuthorsYaml___internal___mediaType',
  AvatarChildAuthorsYamlInternalOwner = 'avatar___childAuthorsYaml___internal___owner',
  AvatarChildAuthorsYamlInternalType = 'avatar___childAuthorsYaml___internal___type',
  AvatarChildAuthorsYamlName = 'avatar___childAuthorsYaml___name',
  AvatarChildAuthorsYamlBio = 'avatar___childAuthorsYaml___bio',
  AvatarChildAuthorsYamlAvatarSourceInstanceName = 'avatar___childAuthorsYaml___avatar___sourceInstanceName',
  AvatarChildAuthorsYamlAvatarAbsolutePath = 'avatar___childAuthorsYaml___avatar___absolutePath',
  AvatarChildAuthorsYamlAvatarRelativePath = 'avatar___childAuthorsYaml___avatar___relativePath',
  AvatarChildAuthorsYamlAvatarExtension = 'avatar___childAuthorsYaml___avatar___extension',
  AvatarChildAuthorsYamlAvatarSize = 'avatar___childAuthorsYaml___avatar___size',
  AvatarChildAuthorsYamlAvatarPrettySize = 'avatar___childAuthorsYaml___avatar___prettySize',
  AvatarChildAuthorsYamlAvatarModifiedTime = 'avatar___childAuthorsYaml___avatar___modifiedTime',
  AvatarChildAuthorsYamlAvatarAccessTime = 'avatar___childAuthorsYaml___avatar___accessTime',
  AvatarChildAuthorsYamlAvatarChangeTime = 'avatar___childAuthorsYaml___avatar___changeTime',
  AvatarChildAuthorsYamlAvatarBirthTime = 'avatar___childAuthorsYaml___avatar___birthTime',
  AvatarChildAuthorsYamlAvatarRoot = 'avatar___childAuthorsYaml___avatar___root',
  AvatarChildAuthorsYamlAvatarDir = 'avatar___childAuthorsYaml___avatar___dir',
  AvatarChildAuthorsYamlAvatarBase = 'avatar___childAuthorsYaml___avatar___base',
  AvatarChildAuthorsYamlAvatarExt = 'avatar___childAuthorsYaml___avatar___ext',
  AvatarChildAuthorsYamlAvatarName = 'avatar___childAuthorsYaml___avatar___name',
  AvatarChildAuthorsYamlAvatarRelativeDirectory = 'avatar___childAuthorsYaml___avatar___relativeDirectory',
  AvatarChildAuthorsYamlAvatarDev = 'avatar___childAuthorsYaml___avatar___dev',
  AvatarChildAuthorsYamlAvatarMode = 'avatar___childAuthorsYaml___avatar___mode',
  AvatarChildAuthorsYamlAvatarNlink = 'avatar___childAuthorsYaml___avatar___nlink',
  AvatarChildAuthorsYamlAvatarUid = 'avatar___childAuthorsYaml___avatar___uid',
  AvatarChildAuthorsYamlAvatarGid = 'avatar___childAuthorsYaml___avatar___gid',
  AvatarChildAuthorsYamlAvatarRdev = 'avatar___childAuthorsYaml___avatar___rdev',
  AvatarChildAuthorsYamlAvatarIno = 'avatar___childAuthorsYaml___avatar___ino',
  AvatarChildAuthorsYamlAvatarAtimeMs = 'avatar___childAuthorsYaml___avatar___atimeMs',
  AvatarChildAuthorsYamlAvatarMtimeMs = 'avatar___childAuthorsYaml___avatar___mtimeMs',
  AvatarChildAuthorsYamlAvatarCtimeMs = 'avatar___childAuthorsYaml___avatar___ctimeMs',
  AvatarChildAuthorsYamlAvatarAtime = 'avatar___childAuthorsYaml___avatar___atime',
  AvatarChildAuthorsYamlAvatarMtime = 'avatar___childAuthorsYaml___avatar___mtime',
  AvatarChildAuthorsYamlAvatarCtime = 'avatar___childAuthorsYaml___avatar___ctime',
  AvatarChildAuthorsYamlAvatarBirthtime = 'avatar___childAuthorsYaml___avatar___birthtime',
  AvatarChildAuthorsYamlAvatarBirthtimeMs = 'avatar___childAuthorsYaml___avatar___birthtimeMs',
  AvatarChildAuthorsYamlAvatarBlksize = 'avatar___childAuthorsYaml___avatar___blksize',
  AvatarChildAuthorsYamlAvatarBlocks = 'avatar___childAuthorsYaml___avatar___blocks',
  AvatarChildAuthorsYamlAvatarPublicUrl = 'avatar___childAuthorsYaml___avatar___publicURL',
  AvatarChildAuthorsYamlAvatarId = 'avatar___childAuthorsYaml___avatar___id',
  AvatarChildAuthorsYamlAvatarChildren = 'avatar___childAuthorsYaml___avatar___children',
  AvatarChildAuthorsYamlFeatured = 'avatar___childAuthorsYaml___featured',
  AvatarChildAuthorsYamlSocial = 'avatar___childAuthorsYaml___social',
  AvatarChildAuthorsYamlSocialUrl = 'avatar___childAuthorsYaml___social___url',
  Featured = 'featured',
  Social = 'social',
  SocialUrl = 'social___url'
}

export type AuthorsYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<FileFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  social?: Maybe<AuthorsYamlSocialFilterListInput>,
};

export type AuthorsYamlGroupConnection = {
   __typename?: 'AuthorsYamlGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<AuthorsYamlEdge>,
  nodes: Array<AuthorsYaml>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type AuthorsYamlSocial = {
   __typename?: 'AuthorsYamlSocial',
  url?: Maybe<Scalars['String']>,
};

export type AuthorsYamlSocialFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type AuthorsYamlSocialFilterListInput = {
  elemMatch?: Maybe<AuthorsYamlSocialFilterInput>,
};

export type AuthorsYamlSortInput = {
  fields?: Maybe<Array<Maybe<AuthorsYamlFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMdx?: Maybe<Mdx>,
  childAuthorsYaml?: Maybe<AuthorsYaml>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterAuthorId = 'childMdx___frontmatter___author___id',
  ChildMdxFrontmatterAuthorChildren = 'childMdx___frontmatter___author___children',
  ChildMdxFrontmatterAuthorName = 'childMdx___frontmatter___author___name',
  ChildMdxFrontmatterAuthorBio = 'childMdx___frontmatter___author___bio',
  ChildMdxFrontmatterAuthorFeatured = 'childMdx___frontmatter___author___featured',
  ChildMdxFrontmatterAuthorSocial = 'childMdx___frontmatter___author___social',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterHeroSourceInstanceName = 'childMdx___frontmatter___hero___sourceInstanceName',
  ChildMdxFrontmatterHeroAbsolutePath = 'childMdx___frontmatter___hero___absolutePath',
  ChildMdxFrontmatterHeroRelativePath = 'childMdx___frontmatter___hero___relativePath',
  ChildMdxFrontmatterHeroExtension = 'childMdx___frontmatter___hero___extension',
  ChildMdxFrontmatterHeroSize = 'childMdx___frontmatter___hero___size',
  ChildMdxFrontmatterHeroPrettySize = 'childMdx___frontmatter___hero___prettySize',
  ChildMdxFrontmatterHeroModifiedTime = 'childMdx___frontmatter___hero___modifiedTime',
  ChildMdxFrontmatterHeroAccessTime = 'childMdx___frontmatter___hero___accessTime',
  ChildMdxFrontmatterHeroChangeTime = 'childMdx___frontmatter___hero___changeTime',
  ChildMdxFrontmatterHeroBirthTime = 'childMdx___frontmatter___hero___birthTime',
  ChildMdxFrontmatterHeroRoot = 'childMdx___frontmatter___hero___root',
  ChildMdxFrontmatterHeroDir = 'childMdx___frontmatter___hero___dir',
  ChildMdxFrontmatterHeroBase = 'childMdx___frontmatter___hero___base',
  ChildMdxFrontmatterHeroExt = 'childMdx___frontmatter___hero___ext',
  ChildMdxFrontmatterHeroName = 'childMdx___frontmatter___hero___name',
  ChildMdxFrontmatterHeroRelativeDirectory = 'childMdx___frontmatter___hero___relativeDirectory',
  ChildMdxFrontmatterHeroDev = 'childMdx___frontmatter___hero___dev',
  ChildMdxFrontmatterHeroMode = 'childMdx___frontmatter___hero___mode',
  ChildMdxFrontmatterHeroNlink = 'childMdx___frontmatter___hero___nlink',
  ChildMdxFrontmatterHeroUid = 'childMdx___frontmatter___hero___uid',
  ChildMdxFrontmatterHeroGid = 'childMdx___frontmatter___hero___gid',
  ChildMdxFrontmatterHeroRdev = 'childMdx___frontmatter___hero___rdev',
  ChildMdxFrontmatterHeroIno = 'childMdx___frontmatter___hero___ino',
  ChildMdxFrontmatterHeroAtimeMs = 'childMdx___frontmatter___hero___atimeMs',
  ChildMdxFrontmatterHeroMtimeMs = 'childMdx___frontmatter___hero___mtimeMs',
  ChildMdxFrontmatterHeroCtimeMs = 'childMdx___frontmatter___hero___ctimeMs',
  ChildMdxFrontmatterHeroAtime = 'childMdx___frontmatter___hero___atime',
  ChildMdxFrontmatterHeroMtime = 'childMdx___frontmatter___hero___mtime',
  ChildMdxFrontmatterHeroCtime = 'childMdx___frontmatter___hero___ctime',
  ChildMdxFrontmatterHeroBirthtime = 'childMdx___frontmatter___hero___birthtime',
  ChildMdxFrontmatterHeroBirthtimeMs = 'childMdx___frontmatter___hero___birthtimeMs',
  ChildMdxFrontmatterHeroBlksize = 'childMdx___frontmatter___hero___blksize',
  ChildMdxFrontmatterHeroBlocks = 'childMdx___frontmatter___hero___blocks',
  ChildMdxFrontmatterHeroPublicUrl = 'childMdx___frontmatter___hero___publicURL',
  ChildMdxFrontmatterHeroId = 'childMdx___frontmatter___hero___id',
  ChildMdxFrontmatterHeroChildren = 'childMdx___frontmatter___hero___children',
  ChildMdxFrontmatterExcerpt = 'childMdx___frontmatter___excerpt',
  ChildMdxFrontmatterSecret = 'childMdx___frontmatter___secret',
  ChildMdxFrontmatterHeroRef = 'childMdx___frontmatter___heroRef',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildAuthorsYamlId = 'childAuthorsYaml___id',
  ChildAuthorsYamlParentId = 'childAuthorsYaml___parent___id',
  ChildAuthorsYamlParentParentId = 'childAuthorsYaml___parent___parent___id',
  ChildAuthorsYamlParentParentChildren = 'childAuthorsYaml___parent___parent___children',
  ChildAuthorsYamlParentChildren = 'childAuthorsYaml___parent___children',
  ChildAuthorsYamlParentChildrenId = 'childAuthorsYaml___parent___children___id',
  ChildAuthorsYamlParentChildrenChildren = 'childAuthorsYaml___parent___children___children',
  ChildAuthorsYamlParentInternalContent = 'childAuthorsYaml___parent___internal___content',
  ChildAuthorsYamlParentInternalContentDigest = 'childAuthorsYaml___parent___internal___contentDigest',
  ChildAuthorsYamlParentInternalDescription = 'childAuthorsYaml___parent___internal___description',
  ChildAuthorsYamlParentInternalFieldOwners = 'childAuthorsYaml___parent___internal___fieldOwners',
  ChildAuthorsYamlParentInternalIgnoreType = 'childAuthorsYaml___parent___internal___ignoreType',
  ChildAuthorsYamlParentInternalMediaType = 'childAuthorsYaml___parent___internal___mediaType',
  ChildAuthorsYamlParentInternalOwner = 'childAuthorsYaml___parent___internal___owner',
  ChildAuthorsYamlParentInternalType = 'childAuthorsYaml___parent___internal___type',
  ChildAuthorsYamlChildren = 'childAuthorsYaml___children',
  ChildAuthorsYamlChildrenId = 'childAuthorsYaml___children___id',
  ChildAuthorsYamlChildrenParentId = 'childAuthorsYaml___children___parent___id',
  ChildAuthorsYamlChildrenParentChildren = 'childAuthorsYaml___children___parent___children',
  ChildAuthorsYamlChildrenChildren = 'childAuthorsYaml___children___children',
  ChildAuthorsYamlChildrenChildrenId = 'childAuthorsYaml___children___children___id',
  ChildAuthorsYamlChildrenChildrenChildren = 'childAuthorsYaml___children___children___children',
  ChildAuthorsYamlChildrenInternalContent = 'childAuthorsYaml___children___internal___content',
  ChildAuthorsYamlChildrenInternalContentDigest = 'childAuthorsYaml___children___internal___contentDigest',
  ChildAuthorsYamlChildrenInternalDescription = 'childAuthorsYaml___children___internal___description',
  ChildAuthorsYamlChildrenInternalFieldOwners = 'childAuthorsYaml___children___internal___fieldOwners',
  ChildAuthorsYamlChildrenInternalIgnoreType = 'childAuthorsYaml___children___internal___ignoreType',
  ChildAuthorsYamlChildrenInternalMediaType = 'childAuthorsYaml___children___internal___mediaType',
  ChildAuthorsYamlChildrenInternalOwner = 'childAuthorsYaml___children___internal___owner',
  ChildAuthorsYamlChildrenInternalType = 'childAuthorsYaml___children___internal___type',
  ChildAuthorsYamlInternalContent = 'childAuthorsYaml___internal___content',
  ChildAuthorsYamlInternalContentDigest = 'childAuthorsYaml___internal___contentDigest',
  ChildAuthorsYamlInternalDescription = 'childAuthorsYaml___internal___description',
  ChildAuthorsYamlInternalFieldOwners = 'childAuthorsYaml___internal___fieldOwners',
  ChildAuthorsYamlInternalIgnoreType = 'childAuthorsYaml___internal___ignoreType',
  ChildAuthorsYamlInternalMediaType = 'childAuthorsYaml___internal___mediaType',
  ChildAuthorsYamlInternalOwner = 'childAuthorsYaml___internal___owner',
  ChildAuthorsYamlInternalType = 'childAuthorsYaml___internal___type',
  ChildAuthorsYamlName = 'childAuthorsYaml___name',
  ChildAuthorsYamlBio = 'childAuthorsYaml___bio',
  ChildAuthorsYamlAvatarSourceInstanceName = 'childAuthorsYaml___avatar___sourceInstanceName',
  ChildAuthorsYamlAvatarAbsolutePath = 'childAuthorsYaml___avatar___absolutePath',
  ChildAuthorsYamlAvatarRelativePath = 'childAuthorsYaml___avatar___relativePath',
  ChildAuthorsYamlAvatarExtension = 'childAuthorsYaml___avatar___extension',
  ChildAuthorsYamlAvatarSize = 'childAuthorsYaml___avatar___size',
  ChildAuthorsYamlAvatarPrettySize = 'childAuthorsYaml___avatar___prettySize',
  ChildAuthorsYamlAvatarModifiedTime = 'childAuthorsYaml___avatar___modifiedTime',
  ChildAuthorsYamlAvatarAccessTime = 'childAuthorsYaml___avatar___accessTime',
  ChildAuthorsYamlAvatarChangeTime = 'childAuthorsYaml___avatar___changeTime',
  ChildAuthorsYamlAvatarBirthTime = 'childAuthorsYaml___avatar___birthTime',
  ChildAuthorsYamlAvatarRoot = 'childAuthorsYaml___avatar___root',
  ChildAuthorsYamlAvatarDir = 'childAuthorsYaml___avatar___dir',
  ChildAuthorsYamlAvatarBase = 'childAuthorsYaml___avatar___base',
  ChildAuthorsYamlAvatarExt = 'childAuthorsYaml___avatar___ext',
  ChildAuthorsYamlAvatarName = 'childAuthorsYaml___avatar___name',
  ChildAuthorsYamlAvatarRelativeDirectory = 'childAuthorsYaml___avatar___relativeDirectory',
  ChildAuthorsYamlAvatarDev = 'childAuthorsYaml___avatar___dev',
  ChildAuthorsYamlAvatarMode = 'childAuthorsYaml___avatar___mode',
  ChildAuthorsYamlAvatarNlink = 'childAuthorsYaml___avatar___nlink',
  ChildAuthorsYamlAvatarUid = 'childAuthorsYaml___avatar___uid',
  ChildAuthorsYamlAvatarGid = 'childAuthorsYaml___avatar___gid',
  ChildAuthorsYamlAvatarRdev = 'childAuthorsYaml___avatar___rdev',
  ChildAuthorsYamlAvatarIno = 'childAuthorsYaml___avatar___ino',
  ChildAuthorsYamlAvatarAtimeMs = 'childAuthorsYaml___avatar___atimeMs',
  ChildAuthorsYamlAvatarMtimeMs = 'childAuthorsYaml___avatar___mtimeMs',
  ChildAuthorsYamlAvatarCtimeMs = 'childAuthorsYaml___avatar___ctimeMs',
  ChildAuthorsYamlAvatarAtime = 'childAuthorsYaml___avatar___atime',
  ChildAuthorsYamlAvatarMtime = 'childAuthorsYaml___avatar___mtime',
  ChildAuthorsYamlAvatarCtime = 'childAuthorsYaml___avatar___ctime',
  ChildAuthorsYamlAvatarBirthtime = 'childAuthorsYaml___avatar___birthtime',
  ChildAuthorsYamlAvatarBirthtimeMs = 'childAuthorsYaml___avatar___birthtimeMs',
  ChildAuthorsYamlAvatarBlksize = 'childAuthorsYaml___avatar___blksize',
  ChildAuthorsYamlAvatarBlocks = 'childAuthorsYaml___avatar___blocks',
  ChildAuthorsYamlAvatarPublicUrl = 'childAuthorsYaml___avatar___publicURL',
  ChildAuthorsYamlAvatarChildImageSharpId = 'childAuthorsYaml___avatar___childImageSharp___id',
  ChildAuthorsYamlAvatarChildImageSharpChildren = 'childAuthorsYaml___avatar___childImageSharp___children',
  ChildAuthorsYamlAvatarId = 'childAuthorsYaml___avatar___id',
  ChildAuthorsYamlAvatarParentId = 'childAuthorsYaml___avatar___parent___id',
  ChildAuthorsYamlAvatarParentChildren = 'childAuthorsYaml___avatar___parent___children',
  ChildAuthorsYamlAvatarChildren = 'childAuthorsYaml___avatar___children',
  ChildAuthorsYamlAvatarChildrenId = 'childAuthorsYaml___avatar___children___id',
  ChildAuthorsYamlAvatarChildrenChildren = 'childAuthorsYaml___avatar___children___children',
  ChildAuthorsYamlAvatarInternalContent = 'childAuthorsYaml___avatar___internal___content',
  ChildAuthorsYamlAvatarInternalContentDigest = 'childAuthorsYaml___avatar___internal___contentDigest',
  ChildAuthorsYamlAvatarInternalDescription = 'childAuthorsYaml___avatar___internal___description',
  ChildAuthorsYamlAvatarInternalFieldOwners = 'childAuthorsYaml___avatar___internal___fieldOwners',
  ChildAuthorsYamlAvatarInternalIgnoreType = 'childAuthorsYaml___avatar___internal___ignoreType',
  ChildAuthorsYamlAvatarInternalMediaType = 'childAuthorsYaml___avatar___internal___mediaType',
  ChildAuthorsYamlAvatarInternalOwner = 'childAuthorsYaml___avatar___internal___owner',
  ChildAuthorsYamlAvatarInternalType = 'childAuthorsYaml___avatar___internal___type',
  ChildAuthorsYamlAvatarChildMdxRawBody = 'childAuthorsYaml___avatar___childMdx___rawBody',
  ChildAuthorsYamlAvatarChildMdxFileAbsolutePath = 'childAuthorsYaml___avatar___childMdx___fileAbsolutePath',
  ChildAuthorsYamlAvatarChildMdxBody = 'childAuthorsYaml___avatar___childMdx___body',
  ChildAuthorsYamlAvatarChildMdxExcerpt = 'childAuthorsYaml___avatar___childMdx___excerpt',
  ChildAuthorsYamlAvatarChildMdxHeadings = 'childAuthorsYaml___avatar___childMdx___headings',
  ChildAuthorsYamlAvatarChildMdxHtml = 'childAuthorsYaml___avatar___childMdx___html',
  ChildAuthorsYamlAvatarChildMdxMdxAst = 'childAuthorsYaml___avatar___childMdx___mdxAST',
  ChildAuthorsYamlAvatarChildMdxTableOfContents = 'childAuthorsYaml___avatar___childMdx___tableOfContents',
  ChildAuthorsYamlAvatarChildMdxTimeToRead = 'childAuthorsYaml___avatar___childMdx___timeToRead',
  ChildAuthorsYamlAvatarChildMdxId = 'childAuthorsYaml___avatar___childMdx___id',
  ChildAuthorsYamlAvatarChildMdxChildren = 'childAuthorsYaml___avatar___childMdx___children',
  ChildAuthorsYamlAvatarChildAuthorsYamlId = 'childAuthorsYaml___avatar___childAuthorsYaml___id',
  ChildAuthorsYamlAvatarChildAuthorsYamlChildren = 'childAuthorsYaml___avatar___childAuthorsYaml___children',
  ChildAuthorsYamlAvatarChildAuthorsYamlName = 'childAuthorsYaml___avatar___childAuthorsYaml___name',
  ChildAuthorsYamlAvatarChildAuthorsYamlBio = 'childAuthorsYaml___avatar___childAuthorsYaml___bio',
  ChildAuthorsYamlAvatarChildAuthorsYamlFeatured = 'childAuthorsYaml___avatar___childAuthorsYaml___featured',
  ChildAuthorsYamlAvatarChildAuthorsYamlSocial = 'childAuthorsYaml___avatar___childAuthorsYaml___social',
  ChildAuthorsYamlFeatured = 'childAuthorsYaml___featured',
  ChildAuthorsYamlSocial = 'childAuthorsYaml___social',
  ChildAuthorsYamlSocialUrl = 'childAuthorsYaml___social___url'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
  childAuthorsYaml?: Maybe<AuthorsYamlFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerpt?: Maybe<Scalars['String']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type Mdx = Node & {
   __typename?: 'Mdx',
  rawBody: Scalars['String'],
  fileAbsolutePath: Scalars['String'],
  frontmatter?: Maybe<MdxFrontmatter>,
  body: Scalars['String'],
  excerpt: Scalars['String'],
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>,
  html?: Maybe<Scalars['String']>,
  mdxAST?: Maybe<Scalars['JSON']>,
  tableOfContents?: Maybe<Scalars['JSON']>,
  timeToRead?: Maybe<Scalars['Int']>,
  wordCount?: Maybe<MdxWordCount>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
};

export type MdxConnection = {
   __typename?: 'MdxConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxGroupConnection>,
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxFieldsEnum
};

export type MdxEdge = {
   __typename?: 'MdxEdge',
  next?: Maybe<Mdx>,
  node: Mdx,
  previous?: Maybe<Mdx>,
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterAuthorId = 'frontmatter___author___id',
  FrontmatterAuthorParentId = 'frontmatter___author___parent___id',
  FrontmatterAuthorParentChildren = 'frontmatter___author___parent___children',
  FrontmatterAuthorChildren = 'frontmatter___author___children',
  FrontmatterAuthorChildrenId = 'frontmatter___author___children___id',
  FrontmatterAuthorChildrenChildren = 'frontmatter___author___children___children',
  FrontmatterAuthorInternalContent = 'frontmatter___author___internal___content',
  FrontmatterAuthorInternalContentDigest = 'frontmatter___author___internal___contentDigest',
  FrontmatterAuthorInternalDescription = 'frontmatter___author___internal___description',
  FrontmatterAuthorInternalFieldOwners = 'frontmatter___author___internal___fieldOwners',
  FrontmatterAuthorInternalIgnoreType = 'frontmatter___author___internal___ignoreType',
  FrontmatterAuthorInternalMediaType = 'frontmatter___author___internal___mediaType',
  FrontmatterAuthorInternalOwner = 'frontmatter___author___internal___owner',
  FrontmatterAuthorInternalType = 'frontmatter___author___internal___type',
  FrontmatterAuthorName = 'frontmatter___author___name',
  FrontmatterAuthorBio = 'frontmatter___author___bio',
  FrontmatterAuthorAvatarSourceInstanceName = 'frontmatter___author___avatar___sourceInstanceName',
  FrontmatterAuthorAvatarAbsolutePath = 'frontmatter___author___avatar___absolutePath',
  FrontmatterAuthorAvatarRelativePath = 'frontmatter___author___avatar___relativePath',
  FrontmatterAuthorAvatarExtension = 'frontmatter___author___avatar___extension',
  FrontmatterAuthorAvatarSize = 'frontmatter___author___avatar___size',
  FrontmatterAuthorAvatarPrettySize = 'frontmatter___author___avatar___prettySize',
  FrontmatterAuthorAvatarModifiedTime = 'frontmatter___author___avatar___modifiedTime',
  FrontmatterAuthorAvatarAccessTime = 'frontmatter___author___avatar___accessTime',
  FrontmatterAuthorAvatarChangeTime = 'frontmatter___author___avatar___changeTime',
  FrontmatterAuthorAvatarBirthTime = 'frontmatter___author___avatar___birthTime',
  FrontmatterAuthorAvatarRoot = 'frontmatter___author___avatar___root',
  FrontmatterAuthorAvatarDir = 'frontmatter___author___avatar___dir',
  FrontmatterAuthorAvatarBase = 'frontmatter___author___avatar___base',
  FrontmatterAuthorAvatarExt = 'frontmatter___author___avatar___ext',
  FrontmatterAuthorAvatarName = 'frontmatter___author___avatar___name',
  FrontmatterAuthorAvatarRelativeDirectory = 'frontmatter___author___avatar___relativeDirectory',
  FrontmatterAuthorAvatarDev = 'frontmatter___author___avatar___dev',
  FrontmatterAuthorAvatarMode = 'frontmatter___author___avatar___mode',
  FrontmatterAuthorAvatarNlink = 'frontmatter___author___avatar___nlink',
  FrontmatterAuthorAvatarUid = 'frontmatter___author___avatar___uid',
  FrontmatterAuthorAvatarGid = 'frontmatter___author___avatar___gid',
  FrontmatterAuthorAvatarRdev = 'frontmatter___author___avatar___rdev',
  FrontmatterAuthorAvatarIno = 'frontmatter___author___avatar___ino',
  FrontmatterAuthorAvatarAtimeMs = 'frontmatter___author___avatar___atimeMs',
  FrontmatterAuthorAvatarMtimeMs = 'frontmatter___author___avatar___mtimeMs',
  FrontmatterAuthorAvatarCtimeMs = 'frontmatter___author___avatar___ctimeMs',
  FrontmatterAuthorAvatarAtime = 'frontmatter___author___avatar___atime',
  FrontmatterAuthorAvatarMtime = 'frontmatter___author___avatar___mtime',
  FrontmatterAuthorAvatarCtime = 'frontmatter___author___avatar___ctime',
  FrontmatterAuthorAvatarBirthtime = 'frontmatter___author___avatar___birthtime',
  FrontmatterAuthorAvatarBirthtimeMs = 'frontmatter___author___avatar___birthtimeMs',
  FrontmatterAuthorAvatarBlksize = 'frontmatter___author___avatar___blksize',
  FrontmatterAuthorAvatarBlocks = 'frontmatter___author___avatar___blocks',
  FrontmatterAuthorAvatarPublicUrl = 'frontmatter___author___avatar___publicURL',
  FrontmatterAuthorAvatarId = 'frontmatter___author___avatar___id',
  FrontmatterAuthorAvatarChildren = 'frontmatter___author___avatar___children',
  FrontmatterAuthorFeatured = 'frontmatter___author___featured',
  FrontmatterAuthorSocial = 'frontmatter___author___social',
  FrontmatterAuthorSocialUrl = 'frontmatter___author___social___url',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterHeroSourceInstanceName = 'frontmatter___hero___sourceInstanceName',
  FrontmatterHeroAbsolutePath = 'frontmatter___hero___absolutePath',
  FrontmatterHeroRelativePath = 'frontmatter___hero___relativePath',
  FrontmatterHeroExtension = 'frontmatter___hero___extension',
  FrontmatterHeroSize = 'frontmatter___hero___size',
  FrontmatterHeroPrettySize = 'frontmatter___hero___prettySize',
  FrontmatterHeroModifiedTime = 'frontmatter___hero___modifiedTime',
  FrontmatterHeroAccessTime = 'frontmatter___hero___accessTime',
  FrontmatterHeroChangeTime = 'frontmatter___hero___changeTime',
  FrontmatterHeroBirthTime = 'frontmatter___hero___birthTime',
  FrontmatterHeroRoot = 'frontmatter___hero___root',
  FrontmatterHeroDir = 'frontmatter___hero___dir',
  FrontmatterHeroBase = 'frontmatter___hero___base',
  FrontmatterHeroExt = 'frontmatter___hero___ext',
  FrontmatterHeroName = 'frontmatter___hero___name',
  FrontmatterHeroRelativeDirectory = 'frontmatter___hero___relativeDirectory',
  FrontmatterHeroDev = 'frontmatter___hero___dev',
  FrontmatterHeroMode = 'frontmatter___hero___mode',
  FrontmatterHeroNlink = 'frontmatter___hero___nlink',
  FrontmatterHeroUid = 'frontmatter___hero___uid',
  FrontmatterHeroGid = 'frontmatter___hero___gid',
  FrontmatterHeroRdev = 'frontmatter___hero___rdev',
  FrontmatterHeroIno = 'frontmatter___hero___ino',
  FrontmatterHeroAtimeMs = 'frontmatter___hero___atimeMs',
  FrontmatterHeroMtimeMs = 'frontmatter___hero___mtimeMs',
  FrontmatterHeroCtimeMs = 'frontmatter___hero___ctimeMs',
  FrontmatterHeroAtime = 'frontmatter___hero___atime',
  FrontmatterHeroMtime = 'frontmatter___hero___mtime',
  FrontmatterHeroCtime = 'frontmatter___hero___ctime',
  FrontmatterHeroBirthtime = 'frontmatter___hero___birthtime',
  FrontmatterHeroBirthtimeMs = 'frontmatter___hero___birthtimeMs',
  FrontmatterHeroBlksize = 'frontmatter___hero___blksize',
  FrontmatterHeroBlocks = 'frontmatter___hero___blocks',
  FrontmatterHeroPublicUrl = 'frontmatter___hero___publicURL',
  FrontmatterHeroChildImageSharpId = 'frontmatter___hero___childImageSharp___id',
  FrontmatterHeroChildImageSharpChildren = 'frontmatter___hero___childImageSharp___children',
  FrontmatterHeroId = 'frontmatter___hero___id',
  FrontmatterHeroParentId = 'frontmatter___hero___parent___id',
  FrontmatterHeroParentChildren = 'frontmatter___hero___parent___children',
  FrontmatterHeroChildren = 'frontmatter___hero___children',
  FrontmatterHeroChildrenId = 'frontmatter___hero___children___id',
  FrontmatterHeroChildrenChildren = 'frontmatter___hero___children___children',
  FrontmatterHeroInternalContent = 'frontmatter___hero___internal___content',
  FrontmatterHeroInternalContentDigest = 'frontmatter___hero___internal___contentDigest',
  FrontmatterHeroInternalDescription = 'frontmatter___hero___internal___description',
  FrontmatterHeroInternalFieldOwners = 'frontmatter___hero___internal___fieldOwners',
  FrontmatterHeroInternalIgnoreType = 'frontmatter___hero___internal___ignoreType',
  FrontmatterHeroInternalMediaType = 'frontmatter___hero___internal___mediaType',
  FrontmatterHeroInternalOwner = 'frontmatter___hero___internal___owner',
  FrontmatterHeroInternalType = 'frontmatter___hero___internal___type',
  FrontmatterHeroChildMdxRawBody = 'frontmatter___hero___childMdx___rawBody',
  FrontmatterHeroChildMdxFileAbsolutePath = 'frontmatter___hero___childMdx___fileAbsolutePath',
  FrontmatterHeroChildMdxBody = 'frontmatter___hero___childMdx___body',
  FrontmatterHeroChildMdxExcerpt = 'frontmatter___hero___childMdx___excerpt',
  FrontmatterHeroChildMdxHeadings = 'frontmatter___hero___childMdx___headings',
  FrontmatterHeroChildMdxHtml = 'frontmatter___hero___childMdx___html',
  FrontmatterHeroChildMdxMdxAst = 'frontmatter___hero___childMdx___mdxAST',
  FrontmatterHeroChildMdxTableOfContents = 'frontmatter___hero___childMdx___tableOfContents',
  FrontmatterHeroChildMdxTimeToRead = 'frontmatter___hero___childMdx___timeToRead',
  FrontmatterHeroChildMdxId = 'frontmatter___hero___childMdx___id',
  FrontmatterHeroChildMdxChildren = 'frontmatter___hero___childMdx___children',
  FrontmatterHeroChildAuthorsYamlId = 'frontmatter___hero___childAuthorsYaml___id',
  FrontmatterHeroChildAuthorsYamlChildren = 'frontmatter___hero___childAuthorsYaml___children',
  FrontmatterHeroChildAuthorsYamlName = 'frontmatter___hero___childAuthorsYaml___name',
  FrontmatterHeroChildAuthorsYamlBio = 'frontmatter___hero___childAuthorsYaml___bio',
  FrontmatterHeroChildAuthorsYamlFeatured = 'frontmatter___hero___childAuthorsYaml___featured',
  FrontmatterHeroChildAuthorsYamlSocial = 'frontmatter___hero___childAuthorsYaml___social',
  FrontmatterExcerpt = 'frontmatter___excerpt',
  FrontmatterSecret = 'frontmatter___secret',
  FrontmatterHeroRef = 'frontmatter___heroRef',
  FrontmatterTags = 'frontmatter___tags',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MdxFrontmatter = {
   __typename?: 'MdxFrontmatter',
  title: Scalars['String'],
  author?: Maybe<AuthorsYaml>,
  date?: Maybe<Scalars['Date']>,
  hero?: Maybe<File>,
  excerpt?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['Boolean']>,
  heroRef?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<AuthorsYamlFilterInput>,
  date?: Maybe<DateQueryOperatorInput>,
  hero?: Maybe<FileFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  secret?: Maybe<BooleanQueryOperatorInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
};

export type MdxGroupConnection = {
   __typename?: 'MdxGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxHeadingMdx = {
   __typename?: 'MdxHeadingMdx',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>,
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxWordCount = {
   __typename?: 'MdxWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  mdx?: Maybe<Mdx>,
  allMdx: MdxConnection,
  article?: Maybe<Article>,
  allArticle: ArticleConnection,
  author?: Maybe<Author>,
  allAuthor: AuthorConnection,
  authorsYaml?: Maybe<AuthorsYaml>,
  allAuthorsYaml: AuthorsYamlConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
  childAuthorsYaml?: Maybe<AuthorsYamlFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>,
  sort?: Maybe<MdxSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<FileFilterInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  secret?: Maybe<BooleanQueryOperatorInput>,
  subscription?: Maybe<BooleanQueryOperatorInput>,
  filePath?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllArticleArgs = {
  filter?: Maybe<ArticleFilterInput>,
  sort?: Maybe<ArticleSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<FileFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  social?: Maybe<AuthorSocialFilterListInput>,
  authorsPage?: Maybe<BooleanQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>
};


export type QueryAllAuthorArgs = {
  filter?: Maybe<AuthorFilterInput>,
  sort?: Maybe<AuthorSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryAuthorsYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<FileFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  social?: Maybe<AuthorsYamlSocialFilterListInput>
};


export type QueryAllAuthorsYamlArgs = {
  filter?: Maybe<AuthorsYamlFilterInput>,
  sort?: Maybe<AuthorsYamlSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  assetPrefix?: Maybe<StringQueryOperatorInput>,
  mapping?: Maybe<SiteMappingFilterInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  assetPrefix?: Maybe<Scalars['String']>,
  mapping?: Maybe<SiteMapping>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataName = 'siteMetadata___name',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataHeroHeading = 'siteMetadata___hero___heading',
  SiteMetadataHeroMaxWidth = 'siteMetadata___hero___maxWidth',
  SiteMetadataSocial = 'siteMetadata___social',
  SiteMetadataSocialName = 'siteMetadata___social___name',
  SiteMetadataSocialUrl = 'siteMetadata___social___url',
  SiteMetadataIsLocal = 'siteMetadata___isLocal',
  SiteMetadataRepoUrl = 'siteMetadata___repoUrl',
  Port = 'port',
  Host = 'host',
  AssetPrefix = 'assetPrefix',
  MappingMdxFrontmatterAuthor = 'mapping___Mdx_frontmatter_author',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  assetPrefix?: Maybe<StringQueryOperatorInput>,
  mapping?: Maybe<SiteMappingFilterInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SiteMapping = {
   __typename?: 'SiteMapping',
  Mdx_frontmatter_author?: Maybe<Scalars['String']>,
};

export type SiteMappingFilterInput = {
  Mdx_frontmatter_author?: Maybe<StringQueryOperatorInput>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  authors?: Maybe<Array<Maybe<SitePageContextAuthors>>>,
  basePath?: Maybe<Scalars['String']>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  group?: Maybe<Array<Maybe<SitePageContextGroup>>>,
  pathPrefix?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Boolean']>,
  last?: Maybe<Scalars['Boolean']>,
  index?: Maybe<Scalars['Int']>,
  pageCount?: Maybe<Scalars['Int']>,
  additionalContext?: Maybe<SitePageContextAdditionalContext>,
  article?: Maybe<SitePageContextArticle>,
  heroRef?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  mailchimp?: Maybe<Scalars['String']>,
  next?: Maybe<Array<Maybe<SitePageContextNext>>>,
};

export type SitePageContextAdditionalContext = {
   __typename?: 'SitePageContextAdditionalContext',
  authors?: Maybe<Array<Maybe<SitePageContextAdditionalContextAuthors>>>,
  basePath?: Maybe<Scalars['String']>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
};

export type SitePageContextAdditionalContextAuthors = {
   __typename?: 'SitePageContextAdditionalContextAuthors',
  authorsPage?: Maybe<Scalars['Boolean']>,
  bio?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  social?: Maybe<Array<Maybe<SitePageContextAdditionalContextAuthorsSocial>>>,
  slug?: Maybe<Scalars['String']>,
  avatar?: Maybe<SitePageContextAdditionalContextAuthorsAvatar>,
};

export type SitePageContextAdditionalContextAuthorsAvatar = {
   __typename?: 'SitePageContextAdditionalContextAuthorsAvatar',
  small?: Maybe<SitePageContextAdditionalContextAuthorsAvatarSmall>,
  medium?: Maybe<SitePageContextAdditionalContextAuthorsAvatarMedium>,
  large?: Maybe<SitePageContextAdditionalContextAuthorsAvatarLarge>,
};

export type SitePageContextAdditionalContextAuthorsAvatarFilterInput = {
  small?: Maybe<SitePageContextAdditionalContextAuthorsAvatarSmallFilterInput>,
  medium?: Maybe<SitePageContextAdditionalContextAuthorsAvatarMediumFilterInput>,
  large?: Maybe<SitePageContextAdditionalContextAuthorsAvatarLargeFilterInput>,
};

export type SitePageContextAdditionalContextAuthorsAvatarLarge = {
   __typename?: 'SitePageContextAdditionalContextAuthorsAvatarLarge',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextAdditionalContextAuthorsAvatarLargeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<IntQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAdditionalContextAuthorsAvatarMedium = {
   __typename?: 'SitePageContextAdditionalContextAuthorsAvatarMedium',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextAdditionalContextAuthorsAvatarMediumFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<IntQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAdditionalContextAuthorsAvatarSmall = {
   __typename?: 'SitePageContextAdditionalContextAuthorsAvatarSmall',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextAdditionalContextAuthorsAvatarSmallFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<IntQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAdditionalContextAuthorsFilterInput = {
  authorsPage?: Maybe<BooleanQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  social?: Maybe<SitePageContextAdditionalContextAuthorsSocialFilterListInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<SitePageContextAdditionalContextAuthorsAvatarFilterInput>,
};

export type SitePageContextAdditionalContextAuthorsFilterListInput = {
  elemMatch?: Maybe<SitePageContextAdditionalContextAuthorsFilterInput>,
};

export type SitePageContextAdditionalContextAuthorsSocial = {
   __typename?: 'SitePageContextAdditionalContextAuthorsSocial',
  url?: Maybe<Scalars['String']>,
};

export type SitePageContextAdditionalContextAuthorsSocialFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAdditionalContextAuthorsSocialFilterListInput = {
  elemMatch?: Maybe<SitePageContextAdditionalContextAuthorsSocialFilterInput>,
};

export type SitePageContextAdditionalContextFilterInput = {
  authors?: Maybe<SitePageContextAdditionalContextAuthorsFilterListInput>,
  basePath?: Maybe<StringQueryOperatorInput>,
  skip?: Maybe<IntQueryOperatorInput>,
  limit?: Maybe<IntQueryOperatorInput>,
};

export type SitePageContextArticle = {
   __typename?: 'SitePageContextArticle',
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  filePath?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateForSEO?: Maybe<Scalars['Date']>,
  timeToRead?: Maybe<Scalars['Int']>,
  excerpt?: Maybe<Scalars['String']>,
  subscription?: Maybe<Scalars['Boolean']>,
  body?: Maybe<Scalars['String']>,
  heroRef?: Maybe<Scalars['String']>,
  hero?: Maybe<SitePageContextArticleHero>,
};

export type SitePageContextArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  secret?: Maybe<BooleanQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  filePath?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<StringQueryOperatorInput>,
  dateForSEO?: Maybe<DateQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  subscription?: Maybe<BooleanQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<SitePageContextArticleHeroFilterInput>,
};

export type SitePageContextArticleHero = {
   __typename?: 'SitePageContextArticleHero',
  full?: Maybe<SitePageContextArticleHeroFull>,
  regular?: Maybe<SitePageContextArticleHeroRegular>,
  narrow?: Maybe<SitePageContextArticleHeroNarrow>,
  seo?: Maybe<SitePageContextArticleHeroSeo>,
};

export type SitePageContextArticleHeroFilterInput = {
  full?: Maybe<SitePageContextArticleHeroFullFilterInput>,
  regular?: Maybe<SitePageContextArticleHeroRegularFilterInput>,
  narrow?: Maybe<SitePageContextArticleHeroNarrowFilterInput>,
  seo?: Maybe<SitePageContextArticleHeroSeoFilterInput>,
};

export type SitePageContextArticleHeroFull = {
   __typename?: 'SitePageContextArticleHeroFull',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleHeroFullFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleHeroNarrow = {
   __typename?: 'SitePageContextArticleHeroNarrow',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleHeroNarrowFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleHeroRegular = {
   __typename?: 'SitePageContextArticleHeroRegular',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleHeroRegularFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleHeroSeo = {
   __typename?: 'SitePageContextArticleHeroSeo',
  src?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleHeroSeoFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAuthors = {
   __typename?: 'SitePageContextAuthors',
  authorsPage?: Maybe<Scalars['Boolean']>,
  bio?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  social?: Maybe<Array<Maybe<SitePageContextAuthorsSocial>>>,
  slug?: Maybe<Scalars['String']>,
  avatar?: Maybe<SitePageContextAuthorsAvatar>,
};

export type SitePageContextAuthorsAvatar = {
   __typename?: 'SitePageContextAuthorsAvatar',
  small?: Maybe<SitePageContextAuthorsAvatarSmall>,
  medium?: Maybe<SitePageContextAuthorsAvatarMedium>,
  large?: Maybe<SitePageContextAuthorsAvatarLarge>,
};

export type SitePageContextAuthorsAvatarFilterInput = {
  small?: Maybe<SitePageContextAuthorsAvatarSmallFilterInput>,
  medium?: Maybe<SitePageContextAuthorsAvatarMediumFilterInput>,
  large?: Maybe<SitePageContextAuthorsAvatarLargeFilterInput>,
};

export type SitePageContextAuthorsAvatarLarge = {
   __typename?: 'SitePageContextAuthorsAvatarLarge',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextAuthorsAvatarLargeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<IntQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAuthorsAvatarMedium = {
   __typename?: 'SitePageContextAuthorsAvatarMedium',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextAuthorsAvatarMediumFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<IntQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAuthorsAvatarSmall = {
   __typename?: 'SitePageContextAuthorsAvatarSmall',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextAuthorsAvatarSmallFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<IntQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAuthorsFilterInput = {
  authorsPage?: Maybe<BooleanQueryOperatorInput>,
  bio?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  social?: Maybe<SitePageContextAuthorsSocialFilterListInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  avatar?: Maybe<SitePageContextAuthorsAvatarFilterInput>,
};

export type SitePageContextAuthorsFilterListInput = {
  elemMatch?: Maybe<SitePageContextAuthorsFilterInput>,
};

export type SitePageContextAuthorsSocial = {
   __typename?: 'SitePageContextAuthorsSocial',
  url?: Maybe<Scalars['String']>,
};

export type SitePageContextAuthorsSocialFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextAuthorsSocialFilterListInput = {
  elemMatch?: Maybe<SitePageContextAuthorsSocialFilterInput>,
};

export type SitePageContextFilterInput = {
  authors?: Maybe<SitePageContextAuthorsFilterListInput>,
  basePath?: Maybe<StringQueryOperatorInput>,
  skip?: Maybe<IntQueryOperatorInput>,
  limit?: Maybe<IntQueryOperatorInput>,
  group?: Maybe<SitePageContextGroupFilterListInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  first?: Maybe<BooleanQueryOperatorInput>,
  last?: Maybe<BooleanQueryOperatorInput>,
  index?: Maybe<IntQueryOperatorInput>,
  pageCount?: Maybe<IntQueryOperatorInput>,
  additionalContext?: Maybe<SitePageContextAdditionalContextFilterInput>,
  article?: Maybe<SitePageContextArticleFilterInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  mailchimp?: Maybe<StringQueryOperatorInput>,
  next?: Maybe<SitePageContextNextFilterListInput>,
};

export type SitePageContextGroup = {
   __typename?: 'SitePageContextGroup',
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  filePath?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateForSEO?: Maybe<Scalars['Date']>,
  timeToRead?: Maybe<Scalars['Int']>,
  excerpt?: Maybe<Scalars['String']>,
  subscription?: Maybe<Scalars['Boolean']>,
  body?: Maybe<Scalars['String']>,
  heroRef?: Maybe<Scalars['String']>,
  hero?: Maybe<SitePageContextGroupHero>,
};

export type SitePageContextGroupFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  secret?: Maybe<BooleanQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  filePath?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<StringQueryOperatorInput>,
  dateForSEO?: Maybe<DateQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  subscription?: Maybe<BooleanQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<SitePageContextGroupHeroFilterInput>,
};

export type SitePageContextGroupFilterListInput = {
  elemMatch?: Maybe<SitePageContextGroupFilterInput>,
};

export type SitePageContextGroupHero = {
   __typename?: 'SitePageContextGroupHero',
  full?: Maybe<SitePageContextGroupHeroFull>,
  regular?: Maybe<SitePageContextGroupHeroRegular>,
  narrow?: Maybe<SitePageContextGroupHeroNarrow>,
  seo?: Maybe<SitePageContextGroupHeroSeo>,
};

export type SitePageContextGroupHeroFilterInput = {
  full?: Maybe<SitePageContextGroupHeroFullFilterInput>,
  regular?: Maybe<SitePageContextGroupHeroRegularFilterInput>,
  narrow?: Maybe<SitePageContextGroupHeroNarrowFilterInput>,
  seo?: Maybe<SitePageContextGroupHeroSeoFilterInput>,
};

export type SitePageContextGroupHeroFull = {
   __typename?: 'SitePageContextGroupHeroFull',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextGroupHeroFullFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextGroupHeroNarrow = {
   __typename?: 'SitePageContextGroupHeroNarrow',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextGroupHeroNarrowFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextGroupHeroRegular = {
   __typename?: 'SitePageContextGroupHeroRegular',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextGroupHeroRegularFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextGroupHeroSeo = {
   __typename?: 'SitePageContextGroupHeroSeo',
  src?: Maybe<Scalars['String']>,
};

export type SitePageContextGroupHeroSeoFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextNext = {
   __typename?: 'SitePageContextNext',
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  filePath?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  dateForSEO?: Maybe<Scalars['Date']>,
  timeToRead?: Maybe<Scalars['Int']>,
  excerpt?: Maybe<Scalars['String']>,
  subscription?: Maybe<Scalars['Boolean']>,
  body?: Maybe<Scalars['String']>,
  heroRef?: Maybe<Scalars['String']>,
  hero?: Maybe<SitePageContextNextHero>,
};

export type SitePageContextNextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  secret?: Maybe<BooleanQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  filePath?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<StringQueryOperatorInput>,
  dateForSEO?: Maybe<DateQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  subscription?: Maybe<BooleanQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
  heroRef?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<SitePageContextNextHeroFilterInput>,
};

export type SitePageContextNextFilterListInput = {
  elemMatch?: Maybe<SitePageContextNextFilterInput>,
};

export type SitePageContextNextHero = {
   __typename?: 'SitePageContextNextHero',
  full?: Maybe<SitePageContextNextHeroFull>,
  regular?: Maybe<SitePageContextNextHeroRegular>,
  narrow?: Maybe<SitePageContextNextHeroNarrow>,
  seo?: Maybe<SitePageContextNextHeroSeo>,
};

export type SitePageContextNextHeroFilterInput = {
  full?: Maybe<SitePageContextNextHeroFullFilterInput>,
  regular?: Maybe<SitePageContextNextHeroRegularFilterInput>,
  narrow?: Maybe<SitePageContextNextHeroNarrowFilterInput>,
  seo?: Maybe<SitePageContextNextHeroSeoFilterInput>,
};

export type SitePageContextNextHeroFull = {
   __typename?: 'SitePageContextNextHeroFull',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextNextHeroFullFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextNextHeroNarrow = {
   __typename?: 'SitePageContextNextHeroNarrow',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextNextHeroNarrowFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextNextHeroRegular = {
   __typename?: 'SitePageContextNextHeroRegular',
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextNextHeroRegularFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextNextHeroSeo = {
   __typename?: 'SitePageContextNextHeroSeo',
  src?: Maybe<Scalars['String']>,
};

export type SitePageContextNextHeroSeoFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextAuthors = 'context___authors',
  ContextAuthorsAuthorsPage = 'context___authors___authorsPage',
  ContextAuthorsBio = 'context___authors___bio',
  ContextAuthorsId = 'context___authors___id',
  ContextAuthorsName = 'context___authors___name',
  ContextAuthorsFeatured = 'context___authors___featured',
  ContextAuthorsSocial = 'context___authors___social',
  ContextAuthorsSocialUrl = 'context___authors___social___url',
  ContextAuthorsSlug = 'context___authors___slug',
  ContextBasePath = 'context___basePath',
  ContextSkip = 'context___skip',
  ContextLimit = 'context___limit',
  ContextGroup = 'context___group',
  ContextGroupId = 'context___group___id',
  ContextGroupSlug = 'context___group___slug',
  ContextGroupSecret = 'context___group___secret',
  ContextGroupTitle = 'context___group___title',
  ContextGroupAuthor = 'context___group___author',
  ContextGroupFilePath = 'context___group___filePath',
  ContextGroupDate = 'context___group___date',
  ContextGroupDateForSeo = 'context___group___dateForSEO',
  ContextGroupTimeToRead = 'context___group___timeToRead',
  ContextGroupExcerpt = 'context___group___excerpt',
  ContextGroupSubscription = 'context___group___subscription',
  ContextGroupBody = 'context___group___body',
  ContextGroupHeroRef = 'context___group___heroRef',
  ContextPathPrefix = 'context___pathPrefix',
  ContextFirst = 'context___first',
  ContextLast = 'context___last',
  ContextIndex = 'context___index',
  ContextPageCount = 'context___pageCount',
  ContextAdditionalContextAuthors = 'context___additionalContext___authors',
  ContextAdditionalContextAuthorsAuthorsPage = 'context___additionalContext___authors___authorsPage',
  ContextAdditionalContextAuthorsBio = 'context___additionalContext___authors___bio',
  ContextAdditionalContextAuthorsId = 'context___additionalContext___authors___id',
  ContextAdditionalContextAuthorsName = 'context___additionalContext___authors___name',
  ContextAdditionalContextAuthorsFeatured = 'context___additionalContext___authors___featured',
  ContextAdditionalContextAuthorsSocial = 'context___additionalContext___authors___social',
  ContextAdditionalContextAuthorsSlug = 'context___additionalContext___authors___slug',
  ContextAdditionalContextBasePath = 'context___additionalContext___basePath',
  ContextAdditionalContextSkip = 'context___additionalContext___skip',
  ContextAdditionalContextLimit = 'context___additionalContext___limit',
  ContextArticleId = 'context___article___id',
  ContextArticleSlug = 'context___article___slug',
  ContextArticleSecret = 'context___article___secret',
  ContextArticleTitle = 'context___article___title',
  ContextArticleAuthor = 'context___article___author',
  ContextArticleFilePath = 'context___article___filePath',
  ContextArticleDate = 'context___article___date',
  ContextArticleDateForSeo = 'context___article___dateForSEO',
  ContextArticleTimeToRead = 'context___article___timeToRead',
  ContextArticleExcerpt = 'context___article___excerpt',
  ContextArticleSubscription = 'context___article___subscription',
  ContextArticleBody = 'context___article___body',
  ContextArticleHeroRef = 'context___article___heroRef',
  ContextHeroRef = 'context___heroRef',
  ContextSlug = 'context___slug',
  ContextId = 'context___id',
  ContextTitle = 'context___title',
  ContextMailchimp = 'context___mailchimp',
  ContextNext = 'context___next',
  ContextNextId = 'context___next___id',
  ContextNextSlug = 'context___next___slug',
  ContextNextSecret = 'context___next___secret',
  ContextNextTitle = 'context___next___title',
  ContextNextAuthor = 'context___next___author',
  ContextNextFilePath = 'context___next___filePath',
  ContextNextDate = 'context___next___date',
  ContextNextDateForSeo = 'context___next___dateForSEO',
  ContextNextTimeToRead = 'context___next___timeToRead',
  ContextNextExcerpt = 'context___next___excerpt',
  ContextNextSubscription = 'context___next___subscription',
  ContextNextBody = 'context___next___body',
  ContextNextHeroRef = 'context___next___heroRef',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsColor = 'pluginCreator___pluginOptions___color',
  PluginCreatorPluginOptionsShowSpinner = 'pluginCreator___pluginOptions___showSpinner',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
  PluginCreatorPluginOptionsOptionsFix = 'pluginCreator___pluginOptions___options___fix',
  PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
  PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsTitle = 'pluginCreator___pluginOptions___title',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
  PluginCreatorPluginOptionsFeedsTitle = 'pluginCreator___pluginOptions___feeds___title',
  PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
  PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  PluginOptionsGatsbyRemarkPluginsOptionsQuality = 'pluginOptions___gatsbyRemarkPlugins___options___quality',
  PluginOptionsGatsbyRemarkPluginsOptionsWithWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  PluginOptionsGatsbyRemarkPluginsOptionsPathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  PluginOptionsGatsbyRemarkPluginsOptionsBackgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  PluginOptionsGatsbyRemarkPluginsOptionsShowCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsMarkdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  PluginOptionsGatsbyRemarkPluginsOptionsLoading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImage = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImage',
  PluginOptionsGatsbyRemarkPluginsOptionsTarget = 'pluginOptions___gatsbyRemarkPlugins___options___target',
  PluginOptionsGatsbyRemarkPluginsOptionsRel = 'pluginOptions___gatsbyRemarkPlugins___options___rel',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsColor = 'pluginOptions___color',
  PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsStages = 'pluginOptions___stages',
  PluginOptionsOptionsFix = 'pluginOptions___options___fix',
  PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
  PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsTitle = 'pluginOptions___title',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  path?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>,
  displayName?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  showSpinner?: Maybe<Scalars['Boolean']>,
  trackingId?: Maybe<Scalars['String']>,
  stages?: Maybe<Array<Maybe<Scalars['String']>>>,
  options?: Maybe<SitePluginPluginOptionsOptions>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  output?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFeeds = {
   __typename?: 'SitePluginPluginOptionsFeeds',
  title?: Maybe<Scalars['String']>,
  output?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  output?: Maybe<StringQueryOperatorInput>,
  query?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  extensions?: Maybe<StringQueryOperatorInput>,
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>,
  displayName?: Maybe<BooleanQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  showSpinner?: Maybe<BooleanQueryOperatorInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  stages?: Maybe<StringQueryOperatorInput>,
  options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  output?: Maybe<StringQueryOperatorInput>,
  query?: Maybe<StringQueryOperatorInput>,
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins',
  resolve?: Maybe<Scalars['String']>,
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
   __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions',
  maxWidth?: Maybe<Scalars['Int']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  quality?: Maybe<Scalars['Int']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  wrapperStyle?: Maybe<Scalars['String']>,
  backgroundColor?: Maybe<Scalars['String']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  disableBgImage?: Maybe<Scalars['Boolean']>,
  target?: Maybe<Scalars['String']>,
  rel?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  quality?: Maybe<IntQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  target?: Maybe<StringQueryOperatorInput>,
  rel?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsOptions = {
   __typename?: 'SitePluginPluginOptionsOptions',
  fix?: Maybe<Scalars['Boolean']>,
  emitWarning?: Maybe<Scalars['Boolean']>,
  failOnError?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsOptionsFilterInput = {
  fix?: Maybe<BooleanQueryOperatorInput>,
  emitWarning?: Maybe<BooleanQueryOperatorInput>,
  failOnError?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  hero?: Maybe<SiteSiteMetadataHero>,
  social?: Maybe<Array<Maybe<SiteSiteMetadataSocial>>>,
  isLocal?: Maybe<Scalars['Boolean']>,
  repoUrl?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<SiteSiteMetadataHeroFilterInput>,
  social?: Maybe<SiteSiteMetadataSocialFilterListInput>,
  isLocal?: Maybe<BooleanQueryOperatorInput>,
  repoUrl?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataHero = {
   __typename?: 'SiteSiteMetadataHero',
  heading?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
};

export type SiteSiteMetadataHeroFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
};

export type SiteSiteMetadataSocial = {
   __typename?: 'SiteSiteMetadataSocial',
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataSocialFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataSocialFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSocialFilterInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type SiteAndMdxQueryVariables = {};


export type SiteAndMdxQuery = (
  { __typename?: 'Query' }
  & { allSite: (
    { __typename?: 'SiteConnection' }
    & { edges: Array<(
      { __typename?: 'SiteEdge' }
      & { node: (
        { __typename?: 'Site' }
        & { siteMetadata: Maybe<(
          { __typename?: 'SiteSiteMetadata' }
          & Pick<SiteSiteMetadata, 'name'>
          & { social: Maybe<Array<Maybe<(
            { __typename?: 'SiteSiteMetadataSocial' }
            & Pick<SiteSiteMetadataSocial, 'url' | 'name'>
          )>>> }
        )> }
      ) }
    )> }
  ), allMdx: (
    { __typename?: 'MdxConnection' }
    & { edges: Array<(
      { __typename?: 'MdxEdge' }
      & { node: (
        { __typename?: 'Mdx' }
        & { frontmatter: Maybe<(
          { __typename?: 'MdxFrontmatter' }
          & Pick<MdxFrontmatter, 'date'>
        )> }
      ) }
    )> }
  ) }
);

export type SeoSiteQueryVariables = {};


export type SeoSiteQuery = (
  { __typename?: 'Query' }
  & { allSite: (
    { __typename?: 'SiteConnection' }
    & { edges: Array<(
      { __typename?: 'SiteEdge' }
      & { node: (
        { __typename?: 'Site' }
        & { siteMetadata: Maybe<(
          { __typename?: 'SiteSiteMetadata' }
          & Pick<SiteSiteMetadata, 'name' | 'description' | 'siteUrl' | 'title'>
          & { social: Maybe<Array<Maybe<(
            { __typename?: 'SiteSiteMetadataSocial' }
            & Pick<SiteSiteMetadataSocial, 'url'>
          )>>> }
        )> }
      ) }
    )> }
  ) }
);

export type ArticleSeoSiteQueryVariables = {};


export type ArticleSeoSiteQuery = (
  { __typename?: 'Query' }
  & { allSite: (
    { __typename?: 'SiteConnection' }
    & { edges: Array<(
      { __typename?: 'SiteEdge' }
      & { node: (
        { __typename?: 'Site' }
        & { siteMetadata: Maybe<(
          { __typename?: 'SiteSiteMetadata' }
          & Pick<SiteSiteMetadata, 'name' | 'siteUrl'>
        )> }
      ) }
    )> }
  ) }
);

export type AuthorHeroQueryVariables = {};


export type AuthorHeroQuery = (
  { __typename?: 'Query' }
  & { site: (
    { __typename?: 'SiteConnection' }
    & { edges: Array<(
      { __typename?: 'SiteEdge' }
      & { node: (
        { __typename?: 'Site' }
        & { siteMetadata: Maybe<(
          { __typename?: 'SiteSiteMetadata' }
          & { hero: Maybe<(
            { __typename?: 'SiteSiteMetadataHero' }
            & Pick<SiteSiteMetadataHero, 'heading' | 'maxWidth'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type ArticleTemplateSiteQueryVariables = {};


export type ArticleTemplateSiteQuery = (
  { __typename?: 'Query' }
  & { allSite: (
    { __typename?: 'SiteConnection' }
    & { edges: Array<(
      { __typename?: 'SiteEdge' }
      & { node: (
        { __typename?: 'Site' }
        & { siteMetadata: Maybe<(
          { __typename?: 'SiteSiteMetadata' }
          & Pick<SiteSiteMetadata, 'name' | 'repoUrl' | 'isLocal'>
        )> }
      ) }
    )> }
  ) }
);
