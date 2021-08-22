# youku.com
Removed some code that made OpenSearch not work properly in Chrome and Chromium-based browsers, see below
```xml
<?xml version="1.0" encoding="UTF-8"?>
```
Update the search URL and icon to the latest
```xml
<Url type="text/html" template="https://so.youku.com/search_video/q_{searchTerms}"/>
<Image width="48" height="48">
https://www.youku.com/favicon.ico
</Image>
```
Renamed to ```opensearch.xml```

---
[Original Files (Not Working)](../archive/youku.com/)