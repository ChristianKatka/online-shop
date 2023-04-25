import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const fadeInOutAndSlideFromBottomAnimation = [
  trigger("fadeInOut", [
    state("void", style({ opacity: 0 })),
    transition(":enter", [
      style({ opacity: 0 }),
      animate("1s ease-in-out", style({ opacity: 1 })),
      query("@slideInFromBottom", animateChild()),
    ]),
    transition(":leave", [animate("1s ease-in-out", style({ opacity: 0 }))]),
  ]),
  trigger("slideInFromBottom", [
    transition(":enter", [
      style({ transform: "translateY(50px)", opacity: 0 }),
      animate("1s ease-out", style({ transform: "translateY(0)", opacity: 1 })),
    ]),
  ]),
];

// export const fadeInOutAnimation = trigger("fadeInOut", [
//   state("void", style({ opacity: 0 })),
//   transition(":enter", [
//     style({ opacity: 0 }),
//     animate("0.5s ease-in-out", style({ opacity: 1 })),
//     query("@fallIn", animateChild()),
//   ]),
//   transition(":leave", [animate("0.5s ease-in-out", style({ opacity: 0 }))]),
// ]);

// export const slideInFromBottomAnimation = trigger("slideInFromBottom", [
//   transition(":enter", [
//     style({ transform: "translateY(50px)", opacity: 0 }),
//     animate(
//       "1s 0.5s ease-out",
//       style({ transform: "translateY(0)", opacity: 1 })
//     ),
//   ]),
// ]);

// export const fsss = [
//   trigger("fadeIn", [
//     transition(":enter", [
//       style({ opacity: 0 }),
//       animate(500),
//       query("@fallIn", animateChild()),
//     ]),
//   ]),
//   trigger("fallIn", [
//     transition(":enter", [
//       style({ transform: "translateY(-20px)" }),
//       animate("1s 1s", style({ opacity: 0, transform: "translateX(-100%)" })),
//     ]),
//   ]),
// ];
