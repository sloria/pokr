require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { User.new }

  describe "#name" do
    it "is invalid if name is blank" do
      expect(user.valid?).to be false
      expect(user.errors[:name]).to include "can't be blank"
    end
  end

  describe "#default_values" do
    it "sets default values after initialize" do
      user = User.new email: "alex@a.com"
      expect(user.name).to eq "alex"
    end
  end

  describe "#points_of_story" do
    it "returns the point user voted for a story" do
      user = User.create(email: 'a@a.com', password: 'password')
      story = Story.create(link: 'http://jira.com/123')
      user_story_point = UserStoryPoint.create user_id: user.id, story_id: story.id, points: 13
      expect(user.points_of_story(story.id)).to eq "13"
    end
  end

  describe "#owner?" do
    it "returns true if role equals 0" do
      user.role = 0
      expect(user.owner?).to be true
    end
  end

  describe "#participant?" do
    it "returns true if role equals 1" do
      user.role = 1
      expect(user.participant?).to be true
    end
  end

  describe "#watcher?" do
    it "returns true if role equals 2" do
      user.role = 2
      expect(user.watcher?).to be true
    end
  end

  describe "#display_name" do
    it "prefers email user name" do
      user.name = 'nickname'
      expect(user.display_name).to eq "nickname"
    end

    it "shows email address if user name does not exist" do
      user.email = 'a@a.com'
      expect(user.display_name).to eq "a@a.com"
    end
  end

  describe "#stories_groomed_count" do
    it "simply returns stories user voted" do
      user = User.create(email: 'a@a.com', password: 'password')
      UserStoryPoint.create(user_id: user.id, story_id: 1, points: 1)
      UserStoryPoint.create(user_id: user.id, story_id: 2, points: 13)
      expect(user.stories_groomed_count).to eq 2
    end
  end

  it { should have_attached_file(:avatar) }
  it { should validate_attachment_content_type(:avatar).
                allowing('image/png', 'image/gif').
                rejecting('text/plain', 'text/xml') }
  it { should validate_attachment_size(:avatar).
                less_than(2.megabytes) }

  describe "#letter_avatar" do
    context "when user uploaded avatar" do
      it "returns user uploaded avatar" do
        allow(user).to receive(:avatar?) { true }
        allow(user).to receive_message_chain(:avatar, :url) { "avatar/path.png" }
        expect(user.letter_avatar).to eq "avatar/path.png"
      end
    end

    context "when user havent upload avatar" do
      it "returns avatar generated by first letter of name" do
        allow(user).to receive(:avatar?) { false }
        allow(user).to receive(:name) { "Alex" }
        expect(user.letter_avatar).to match /letter_avatars\/2\/A.+100.png/
      end

      it "returns avatar generated by first pinyin letter of name if its Chinese" do
        allow(user).to receive(:avatar?) { false }
        allow(user).to receive(:name) { "石" }
        expect(user.letter_avatar).to match /letter_avatars\/\d+\/S.+100.png/
      end
    end
  end

end
