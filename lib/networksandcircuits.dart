
import 'networksandcircuits_platform_interface.dart';

class Networksandcircuits {
  Future<String?> getPlatformVersion() {
    return NetworksandcircuitsPlatform.instance.getPlatformVersion();
  }
}
