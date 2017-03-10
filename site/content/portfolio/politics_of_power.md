+++
date = "2016-10-25T11:04:14+08:00"
title = "politics of power"
subtitle="don't really know what we are talkin' about again"
year=""
img=["pop1a.jpg"]
video-link=[]
featured_in_home="yes"
category=""
clientLogo=""

[galleries]

[[galleries.gallery]]
  name="heroGallery"

  [[galleries.gallery.item]]
  type="photo"
  img = "pop1a.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop1a.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop6a.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop5a.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "pop8.jpg"
  captionTitle = ""
  captionDescription = ""


[[galleries.gallery]]
  name="instructions"

  [[galleries.gallery.item]]
  type="photo"
  img = "model-d.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "model-m.jpg"
  captionTitle = ""
  captionDescription = ""

  [[galleries.gallery.item]]
  type="photo"
  img = "model-t.jpg"
  captionTitle = ""
  captionDescription = ""

+++


With a growing number of networked and autonomous objects as well as the outbreak of fields such as « the IoT », communication protocols used by connected products are increasingly important as they act as the network’s backbone.
Since the end product is « black-boxed » to the user, we often assume that all nodes of a network are equal.
But is it?

For example, in a home, two appliances in the same network must be working at the same time, but because of a power shortage, they cannot run in parallel. This bring us to question, who should be given the priority and why?
In every existing network – be it machine or nature, rules are established in order to determine its structure, hierarchy, and the way the communication will be synchronized between all the actors of the network. But who and what criterions will define this power hierarchy? Products and networks are inherently embedded with ideologies of the designers, engineers, and other stakeholders who shape their trajectory along the way.

“Politics of Power” is an exploration of these questions on a micro-scale by using a simple ubiquitous product, the multi-plug.
The project looks at how a mass-manufactured product – although developed for a precise and unique purpose – could behave differently depending on the nature of its communication protocol and how the design of the product itself could reflect these hidden logic and rules.
Three multi-plugs – Model D, M and T – are designed to look and behave based on different ideologies and structures, allowing people to experience the hidden politics of networks in an everyday life products through an electrical system.

{{< gridGallery type="full" galleryName="heroGallery" >}}

{{< gridGallery type="grid" galleryName="instructions" >}}

{{< tabs >}}
  {{% tab "Model M" %}}

    # Constitution for Pyramidal arch
    # --- Establish Pyramidal ---
    # Define which plug has the
    # highest power

    Assign_Hierarchical_Power:

    Top_Pyramid = HIGHEST_POWER_LEVEL
    Middle_Pyramid = MIDDLE_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL

    Top_Lifespan = Random(X_MINUTES)

    # --- Pyramidal Setup ---
    Pyramidal_Constitution:
    Assign_Hierarchical_Power()

    # --- Pyramidal Refresh ---
    Refresh_Pyramidal:

    Top_Pyramid = NO_POWER_LEVEL
    Middle_Pyramid = HIGHEST_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL

    if Current_Time >= Mourning_Time:
    Assign_Hierarchical_Power()
    Assign_Hierarchical_Power()

    // --- Top Unplugged ---
    // Delegate when the top is unplugged
    Top_Unplugged:
    // The top is more of an icon
    //no big power changes if he isnt here
    Middle_Pyramid = HIGHEST_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL
    # --- Middle Unplugged ---
    # Delegate when one plug in middle is
    # unplugged
    Middle_Unplugged:
    # If all middle plugs are out
    # then the bottom level is in chaos
    if Middle_Pyramid == 0:

    Bottom_Pyramid = UNSTABLE_POWER_LEVEL

    # --- Bottom Unplugged ---
    # Delegate when one plug in bottom is
    # unplugged
    Bottom_Unplugged:

    # Plebs, nothing happen
    NULL

  {{% /tab %}}
  {{% tab "Model T" %}}

    # Constitution for Pyramidal arch
    # --- Establish Pyramidal ---
    # Define which plug has the
    # highest power

    Assign_Hierarchical_Power:

    Top_Pyramid = HIGHEST_POWER_LEVEL
    Middle_Pyramid = MIDDLE_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL

    Top_Lifespan = Random(X_MINUTES)

    # --- Pyramidal Setup ---
    Pyramidal_Constitution:
    Assign_Hierarchical_Power()

    # --- Pyramidal Refresh ---
    Refresh_Pyramidal:

    Top_Pyramid = NO_POWER_LEVEL
    Middle_Pyramid = HIGHEST_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL

    if Current_Time >= Mourning_Time:
    Assign_Hierarchical_Power()
    Assign_Hierarchical_Power()

    // --- Top Unplugged ---
    // Delegate when the top is unplugged
    Top_Unplugged:
    // The top is more of an icon
    //no big power changes if he isnt here
    Middle_Pyramid = HIGHEST_POWER_LEVEL
    Bottom_Pyramid = LOWEST_POWER_LEVEL
    # --- Middle Unplugged ---
    # Delegate when one plug in middle is
    # unplugged
    Middle_Unplugged:
    # If all middle plugs are out
    # then the bottom level is in chaos
    if Middle_Pyramid == 0:

    Bottom_Pyramid = UNSTABLE_POWER_LEVEL

    # --- Bottom Unplugged ---
    # Delegate when one plug in bottom is
    # unplugged
    Bottom_Unplugged:

    # Plebs, nothing happen
    NULL

  {{% /tab %}}
{{< /tabs >}}
