================================================================
Orchard CMS Webmoco Responsive #1.0 - http://www.webmoco.com/

Webmoco Responsive No. 1 is an adaptive HTML theme developed for the Orchard CMS by Webmoco. This is the first of a planned series of CMS themes based on the exciting new idea of responsive HTML/CSS design. Responsive layouts use css3 media queries to target a range of different device screens. 

The theme will provide users of desktop, tablet and mobile devices with an optimised user experience suited to their screen. users with older browsers see a standard default view.

To achieve this we check the device width and tailor the UI to suit each screen, often by scaling elements and in some case moving or re-ordering UI elements. 

Webmoco Responsive No.1 is great to use in itself and can also be used as a starting point for your own responsive development.  We hope you enjoy using the theme and welcome your feedback (sent to themes@webmoco.com). The Webmoco team will be developing more responsive themes in the future; so your comments will help us perfect our responsive HTML solutions.

We have learnt and awful lot from the Orchard community while working on a number of Orchard based CMS solutions, so we wanted to give something back.  If you do use this theme we'd love it if you credited us, if you can. The photo's featured in the theme gallery images are by Alex Popovkin. A great photographer who makes some of his images available under the creative commons licence, thanks Alex!


Setup Notes:

  * Images placed in the sidebar, blog posts, or pages will automatically receive the white border and drop shadow styling.
  * Images will resize to never exceed the width available in their container element, but for this to work inserted images should NOT have a width/height applied to them within their tag. Images inserted in content with the 'Insert/Update Media' icon in the text editor should remove the width and height attributes that are automatically filled in by the pop up dialog.
  * Anchor/Link tags (<a href='/some_url' title='some url'>some url</a>) that should be styled like buttons can have the 'button' css class applied like this:
	<a href='/some_url' title='some url' class='button'>some url</a>
	If using the text editor, this editing is achieved by clicking the 'html' button on the text editor toolbar, locating the relevant 'a' tag and adding class='button' as shown in the preceding example.
  * To use a custom logo, change the url of the img tag in Branding.cshtml
  * Have a look at how the media query breakpoints work. Styles in a higher screen-size breakpoint (like smartphone-landscape) will also affect the smaller screen-sizes, but not larger ones. This cascading saves repeating css as you go down in screen size.


Some further technical details:
	reponsive, fixed-width column (1gutter=1em=16px, 1col=4em=64px) grid using http://framelessgrid.com method
		currently 5 media query breakpoints for targeting:
			smartphones in portrait mode
			smartphones in landscape mode
			tablets in portrait mode
			tablets in landscape mode & small desktops		// default styles
			widescreen desktop (>1424px/89em)
	fully em-based widths and typography
	fixed header on screens greater in width than a tablet computer in portait mode
	non-fixed (static) header on smaller screens

Webmoco Responsive #1 is the first iteration of this theme. We welcome feedback (sent to themes@webmoco.com) on what can be improved.

================================================================

/*!
 * Orchard CMS Webmoco Responsive No. 1 Theme, by Webmoco
 * http://www.webmoco.com/templates/
 *
 * Copyright 2012, Webmoco
 * All rights reserved.
 *
 * This is release under the BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
 * http://www.opensource.org/licenses/BSD-2-Clause
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the distribution.
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

Orchard CMS Webmoco Responsive No. 1 Theme, by Webmoco
http://www.webmoco.com/templates/

Copyright 2012, Webmoco
All rights reserved.

This is release under the BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
http://www.opensource.org/licenses/BSD-2-Clause

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
