# Mardini E-commerce Journey

## To Do

- modify the scroll bar to match the visual identity
- make the header disappear when scrolling down and reappear when back to top , and make a button to scroll up
- do the media query for all the styles
- make a number appear on the cart nav showing how many items the user have in the cart
- make an animation for the categories in the home page
- try to make the path of the url in the single product page show its ID or Its Name or anything else
- make the animation start when the screen is on it , not before
- when changing a filter in the product page , even the existing products that match the filter should have an animation

## Done

- when u click another page it start from top not from where u leave the last page
- make a filter Component in the MainProducts.tsx For the Filtering Logic
- make the product card when click go to single product page , and when click on the cart it added to the cart
- using a custom hook inside it a useQuery to let me use the response across the project
- make the new arrivals , best sellers , etc a component and don't repeat it 3 times
- add a local storage with the persist middleware from Zustand
- if the cart is empty it won't take you to checkout page
- make the footer appear only in specific pages with the open & closing route component and the Outlet component.
- make the media query for mobile devices
- add a pop up when submitting is successful
- make the header disappear when scrolling down and appearing when scrolling up
- solve when no items in cart, the heading collapse
- solve that the headings of the table scroll with content


## Learnt, Solved & Conclusions

consider using the generics to solve the problem of different icon sources
cause both gives us a components
lucide : the component is fixed on the icon its self .
Font Awesome : the component changed by the icon attribute

- How to write a proper .md files.
