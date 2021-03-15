require 'something'

module Cool
  # Check if cool
  class Check < Cool

    include Cool

    def errrrr_what(yeah)
      self.stuff
    end

    def stuff(this:, that: nil)
      begin
        this[:yeah]
      rescue StandardError
        "this: #{this}, that: #{that}"
      end
    end

    def hash_it_out
      return {
        "cool" => "I think so",
        :super_cool => false,
        coolest: true
      }
    end

    def i_should_think_so
      return unless Something::Amazing && Cool.superfly
    end
end
