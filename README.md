# flatuicolorshex
A ligthweight color picker using HTML 5 Clipboard API http://www.flatuicolorshex.com/


<h1><a id="user-content-palette" class="anchor" href="#palette" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Palette</h1>
<p><a href="http://www.flatuicolorshex.com/">http://www.flatuicolorshex.com/</a> - a minimal color picker that does not use Adobe Flash.</p>
<h2><a id="user-content-features" class="anchor" href="#features" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>
<ul>
<li>All popular color palettes in one place: - Material (Android) - iOS 7/8 -
Metro (Windows Phone 7/8) - FlatUI - Solarized - Tango (Gnome)</li>
<li>HTML5 Clipboard API to copy color values into the clipboard</li>
<li>Works well enough if your browser doesn't support HTML5 Clipboard API yet</li>
<li>Works well enough even without javascript (e.g. with NoScript enabled)</li>
<li>Open source</li>
</ul>
<h2><a id="user-content-screenshots" class="anchor" href="#screenshots" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Screenshots</h2>
<p>
</p>
<h2><a id="user-content-why-another-one-color-picker" class="anchor" href="#why-another-one-color-picker" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why another one color picker?</h2>
<p>In our apps we often use colors from some well-known palettes. If we make an
Android app - we follow material guidelines, if we make a hipster webapp - we
use calm FlatUI colors etc.</p>
<p>Now we have one tiny web page aggregating all popular palettes. Btw, if there
is a famous palette that is missing in our list - let us know!</p>
<p>But the bigger problem is the way how other pickers work. As of 2015 they all
suck because they use Adobe Flash.  In fact, they only use Flash to copy
hexadecimal color value into the clipboard! Firefox disabled flash and I
personally perfer to disable it in Chrome. This makes all other pickers
useless.</p>
<p>We now have HTML5 Clipboard API. It works fine in recent Chrome and Firefox. We
dared to become the first color picker webapp to use HTML5 instead of Flash.</p>
<h2><a id="user-content-fallback-gracefully" class="anchor" href="#fallback-gracefully" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fallback gracefully</h2>
<p>If you have Chrome of Firefox - just click on the color tile and the value will
be copied into your clipboard. You should see an animation confirming your
selection.</p>
<p>If you have other browsers - most likely the color value will be shown and
selected after the click. You only have to manually press Ctrl+C. This is how
Trello deals with clipboard and it seems to be a good compromise between being
useful and being Flash-less.</p>
<p>If you are paranoid and don't have JavaScript enabled - we will show you all
the color values at once. You can double-click and press Ctrl+C to select the
color.</p>



