---
sidebar_position: 6
---

# Variables

Variables are reserved values that unlike status keys, are saved after the workflow and can be used in different workflows. Variables can be global and shared in your whole application between different pages, or just in a single page between different workflows. Variables can be used in a lot of processes, one way to use them is for filtering.

## Local Variables

In this example we will assume there is a page with 2 text blocks.

### Creation

1. Go to the page you want to use the variable in, and open the app builder

   > Note: When you open the AppBuilder, please select edit mode and not view mode. When you select the edit mode the page becomes locked and you are the only one allowed to change it until the changes are accepted in the ChangeLog.

2. Click on the base and go to the variables property
   > Note that a local variable can be created in any layout you need.
3. Click the + sign to create a new one
4. Give it a name and a type. You can also give it an initial value using the Formula textbox if you need to initialize it.

<center>

<video controls="controls">
  <source src="/img/tut6-1.mov" />
</video>

</center>

### Using Local Variables

Workflows are used to read or change local variables.

1. In the variables category, choose the read variable
2. Now choose the element which has the variable. For this example it was the base
3. Set it to the text block
4. Delay for 3 seconds
5. In the variables category, choose the set variable
6. Now choose the element which has the variable. For this example it was the base
7. Choose which variable you want to change
8. Give it the value you want
9. Save the WF
10. And add it to the text block as on init event

<center>

<video controls="controls">
  <source src="/img/tut6-2.mov" />
</video>

</center>

<center>

<video controls="controls">
  <source src="/img/tut6-3.mov" />
</video>

</center>

<center>

<video controls="controls">
  <source src="/img/tut6-4.mov" />
</video>

</center>

## Global Variables

### Creation

1. Navigate to the settings
2. Go to the data tab
3. Go to the global variables tab
4. Click the + button to create a new global variable
5. Set a name and a data type
6. If you want to initialize it, give it a value in the formula

<center>

<video controls="controls">
  <source src="/img/tut6-5.mov" />
</video>

</center>

### Using Global Variables

Workflows are used to read or change global variables.

1. Choose which variable you want to read
2. Store it in a static key
3. Add a show message
4. Use the stored value as message
5. You can save it using the set variable WFB

<center>

<video controls="controls">
  <source src="/img/tut6-6.mov" />
</video>

</center>

<center>

<video controls="controls">
  <source src="/img/tut6-7.mov" />
</video>

</center>

<center>

<video controls="controls">
  <source src="/img/tut6-8.mov" />
</video>

</center>

> Note: All changes made are saved locally on your account, and are not visible to the all other users. To make them visible to all users please accept the changes in the ChangeLog Overview in the settings.
