# douban.com
```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>豆瓣</ShortName>
  <Description>在豆瓣搜索书籍、电影、音乐</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Url type="text/html" method="get" template="https://www.douban.com/search">
    <Param name="q" value="{searchTerms}" />
  </Url>
  <moz:SearchForm>http://www.douban.com/search</moz:SearchForm>
</OpenSearchDescription>
```
https://www.douban.com/opensearch