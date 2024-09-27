<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" indent="yes" />

    <xsl:template match="/sitemap:urlset">
        <html>
        <head>
            <title>Sitemap</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }
                h1 { color: #ff5733; }
                ul { list-style-type: none; padding: 0; }
                li { margin: 10px 0; }
                a { text-decoration: none; color: #3498db; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Sitemap</h1>
            <ul>
                <xsl:apply-templates select="sitemap:url" />
            </ul>
        </body>
        </html>
    </xsl:template>

    <xsl:template match="sitemap:url">
        <li>
            <a>
                <xsl:value-of select="sitemap:loc" />
            </a>
        </li>
    </xsl:template>
</xsl:stylesheet>
