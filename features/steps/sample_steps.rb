require 'open-uri'

Given(/^the app has launched$/) do
  wait_for do
    !query("*").empty?
  end
end

And(/^I have done a specific thing$/) do
  # Example: Given I am logged in
  #  wait_for do
  #    !query("* marked:'username'").empty?
  #  end
  #
  #  touch("* marked:'username'")
  #  wait_for_keyboard
  #  keyboard_enter_text("cleveruser27")
  #
  #  touch("* marked:'password'")
  #  wait_for_keyboard
  #  keyboard_enter_text("pa$$w0rd")
  #
  #  wait_for_element_exists("* marked:'Login'")
  #  touch("* marked:'Login'")

  # Remember: any Ruby is allowed in your step definitions
  did_something = true

  unless did_something
    fail 'Expected to have done something'
  end
end

When(/^I do something$/) do
  # Example: When I create a new entry
  #  tap("* marked:'new_entry'")
  #  wait_for_keyboard
  #  keyboard_enter_text("* marked:'entry_title'", 'My Entry')
  #
  #  tap("* marked:'submit'")
end

Then(/^something should happen$/) do
  # Example: Then I should see the entry on my home page
  #  wait_for_element_exists("* text:'My Entry'")
end

Then(/^The Internet is down$/) do
  %x[networksetup -setairportpower en1 off]
  %x[sudo ifconfig en0 down]
end

Then(/^The Internet is online$/) do
  %x[networksetup -setairportpower en1 on]
  %x[sudo ifconfig en0 up]
  sleep(5)
end

Then(/^Check the Internet status$/) do
  if check_internet
    puts('Online')
  else
    puts('Offline')
  end
end

def check_internet
  return true if open("http://www.google.com/")
rescue
  return false
end
